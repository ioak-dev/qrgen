<template>
  <div class="oak-check-box" v-bind:class="style">
    <div v-if="data" class="checked" @click="handleChange(false)">
      <i class="material-icons">check</i>
    </div>
    <div v-else class="unchecked" @click="handleChange(true)"></div>
    <div v-if="label" class="label">{{ label }}</div>
  </div>
</template>
<script>
export default {
  name: 'OakCheckbox',
  props: {
    label: String,
    id: String,
    data: Boolean,
    labelPosition: String,
    variant: String,
    theme: String,
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
@import './styles/oak-checkbox.scss';
</style>
