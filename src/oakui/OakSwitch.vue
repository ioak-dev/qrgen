<template>
  <div class="oak-switch" v-bind:class="style">
    <div
      v-for="item in objects"
      v-bind:key="item.key"
      class="radio-item"
      v-bind:class="item.key === data ? 'selected' : 'unchecked'"
      @click="handleChange(item.key)"
    >
      {{ item.value }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakSwitch',
  props: {
    data: String,
    variant: String,
    theme: String,
    objects: Array,
  },
  computed: {
    style: function() {
      let style = this.theme ? this.theme : '';
      style += this.variant ? ` ${this.variant}` : '';
      return style;
    },
  },
  methods: {
    handleChange: function(checkedState) {
      event.target.value = checkedState;
      this.$emit('change', event);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './styles/oak-switch.scss';
</style>
