<template>
  <div class="accordion-section">
    <div
      class="header typography-3"
      v-bind:class="isExpanded ? 'show' : 'hide'"
      @click="toggle"
    >
      <div class="left">
        <i v-if="icon" class="material-icons">{{ icon }}</i>
        <div v-if="label">{{ label }}</div>
        <slot v-else name="label"></slot>
      </div>
      <div class="right">
        <i
          class="material-icons"
          v-bind:class="isExpanded ? 'showless' : 'showmore'"
          >expand_more</i
        >
      </div>
    </div>
    <div
      class="container"
      v-bind:class="isExpanded ? 'show ' + instanceId : 'hide ' + instanceId"
      v-bind:ref="instanceId"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import { newId, sendMessage, receiveMessage } from '@/events/MessageService';
export default {
  name: 'OakAccordion',
  props: {
    label: String,
    icon: String,
    collapseOthers: Boolean,
    group: String,
    defaultSection: Boolean,
  },
  data: function() {
    return {
      isExpanded: true,
      instanceId: newId(),
    };
  },
  methods: {
    toggle: function() {
      this.isExpanded = !this.isExpanded;
      if (this.collapseOthers && this.isExpanded) {
        sendMessage('accordion-expanded', true, {
          group: this.group,
          instanceId: this.instanceId,
        });
      }
    },
    updateScrollHeight: function() {
      setTimeout(() => {
        if (this.isExpanded && this.$refs[this.instanceId]) {
          this.$refs[this.instanceId].style.maxHeight =
            this.$refs[this.instanceId].scrollHeight + 'px';
        } else if (this.$refs[this.instanceId]) {
          this.$refs[this.instanceId].style.maxHeight = 0 + 'px';
        }
      }, 0);
    },
  },
  created() {
    if (this.collapseOthers && !this.defaultSection) {
      this.isExpanded = false;
    }
    const eventBus = receiveMessage().subscribe(message => {
      if (message.name === 'accordion-expanded') {
        if (
          message.data.group === this.group &&
          message.data.instanceId !== this.instanceId
        ) {
          this.isExpanded = false;
        }
      }
    });
    this.updateScrollHeight();
    // this.$parent.$on('viewUpdated', this.updateScrollHeight);
  },
  mounted() {
    const dom = document.getElementsByClassName(this.instanceId)[0];
    dom.addEventListener('DOMNodeInserted', () => {
      // console.log('changeDOMNodeInserted');
      this.updateScrollHeight();
    });
  },
  // beforeUpdate() {
  //   this.updateScrollHeight();
  // },
  watch: {
    isExpanded: function() {
      this.updateScrollHeight();
    },
  },
};
</script>
<style lang="scss" scoped>
.accordion-section {
  // background-color: var(--color-background-2);
  border-radius: 4px;
  .header {
    background-color: var(--color-background-2);
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid transparent;
    .material-icons {
      //   line-height: 40px;
      vertical-align: middle;
      cursor: pointer;
      transition: transform 250ms ease-in-out;
      &.showless {
        transform: scaleY(-1);
      }
    }
    .left {
      display: flex;
      align-items: center;
    }
    &:hover {
      border-bottom: 2px solid var(--color-background-4);
    }
    &.show {
      border-bottom: 2px solid var(--color-primary-1);
      //   .material-icons {
      //     color: var(--color-primary-1);
      //   }
    }
    color: var(--color-foreground-2);
    font-size: 0.9em;
  }
  .container {
    overflow-y: auto;
    transition: max-height 250ms ease-in-out;
    // &.hide {
    //   visibility: hidden;
    // }
  }
}
</style>
