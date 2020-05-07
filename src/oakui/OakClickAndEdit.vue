<template>
  <div class="oak-click-and-edit">
    <div class="typography-4 form-element-label">{{ label }}</div>
    <div
      v-if="showEdit"
      v-bind:id="`oak-click-and-edit-${id}`"
      class="edit-content-container"
    >
      <slot name="edit-content"></slot>
    </div>
    <div v-else @click="show" class="view-content-container">
      <div class="view-content"><slot name="view-content"></slot></div>
      <div class="view-content-edit-icon">
        <i class="material-icons">edit</i>
      </div>
    </div>
  </div>
</template>
<script>
import { receiveMessage } from '@/events/MessageService';
export default {
  name: 'OakClickAndEdit',
  props: {
    id: String,
    alwaysView: Boolean,
    alwaysEdit: Boolean,
    label: String,
  },
  created() {
    receiveMessage().subscribe(message => {
      if (message.name === 'blur' && message.data.id === this.id) {
        this.hide();
      }
    });
  },
  data: function() {
    return {
      showEdit: this.alwaysEdit ? true : false,
    };
  },
  methods: {
    show: function() {
      this.showEdit = this.alwaysView ? false : true;
    },
    hide: function() {
      this.showEdit = this.alwaysEdit ? true : false;
    },
  },
};
</script>
<style lang="scss" scoped>
.view-content-container {
  width: fit-content;
  margin-bottom: 20px;
  // background-color: aqua;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  align-content: center;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--color-background-5);
    border-radius: 4px;
  }
  .view-content {
    padding: 6px 6px;
    &:hover + div {
      // display: block;
      color: var(--color-foreground-1);
    }
  }
  .view-content-edit-icon {
    // display: none;
    color: transparent;
    padding: 6px 6px 0 0;
    &:hover {
      // display: block;
      color: var(--color-foreground-1);
    }
  }
}
.edit-content-container {
  // padding: 6px;
}
</style>
