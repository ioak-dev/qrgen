<template>
  <div class="oak-popover-menu" :class="style" v-bind:id="id">
    <div v-if="label" class="label" @click="toggle" :class="labelStyle">
      <div v-if="iconLeft" class="left-icon">
        <i class="material-icons">{{ iconLeft }}</i>
      </div>
      <div class="label-text">{{ label }}</div>
      <div class="right-icon">
        <i class="material-icons">{{ iconRight }}</i>
      </div>
    </div>
    <div v-else class="label-custom" @click="toggle">
      <slot name="label"></slot>
    </div>
    <div
      class="dropdown-content"
      v-bind:class="dropdownContentStyle"
      @click="toggle"
    >
      <div
        v-for="element in elements"
        v-bind:key="element.label"
        class="element"
        @click="element.action"
      >
        <OakIcon v-if="element.icon" :mat="element.icon" />
        <OakIcon v-if="element.mat" :mat="element.mat" />
        <OakIcon v-if="element.fa" :fa="element.fa" />
        <OakIcon v-if="element.svg" :svg="element.svg" />
        {{ element.label }}
      </div>
    </div>
  </div>
</template>
<script>
import OakIcon from '@/oakui/OakIcon.vue';
export default {
  name: 'OakSelect',
  components: { OakIcon },
  props: {
    id: String,
    label: String,
    data: String,
    elements: Array,
    labelVariant: String,
    theme: String,
    right: Boolean,
    iconLeft: String,
    iconRight: String,
    mobilize: Boolean,
  },
  data() {
    return {
      style: this.getStyle(),
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    getStyle() {
      let style = this.theme ? this.theme : '';
      style += this.labelVariant ? ` ${this.labelVariant}` : '';
      style += this.width ? ` ${this.width}` : '';
      return style;
    },
    changeSelection(newValue) {
      event.target.name = this.id;
      event.target.value = newValue;
      this.$emit('change', event);
      this.toggle();
    },
  },
  computed: {
    dropdownContentStyle: function() {
      let style = this.show ? 'show' : 'hide';
      style += this.right ? ' right' : '';
      return style;
    },
    labelStyle: function() {
      let style = this.show ? 'active' : '';
      style += this.mobilize ? ' short-label' : '';
      return style;
    },
  },
  created() {
    window.addEventListener('click', e => {
      // console.log(e.target, document.getElementById(this.id), this.id);
      // console.log(
      //   document
      //     .getElementById(this.id)
      //     .querySelector('.oak-popover-menu-label').classList
      // );
      if (!document.getElementById(this.id)?.contains(e.target)) {
        this.show = false;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/oak-popover-menu.scss';
</style>
