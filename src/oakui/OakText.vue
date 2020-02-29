<template>
  <div class="oak-text-field">
    <label>{{ label }}</label>
    <input
      v-if="!multiline"
      :disabled="disabled"
      autoComplete="off"
      :placeholder="placeholder"
      :type="type ? type : 'text'"
      :name="id"
      :value="data"
      @keyup="$emit('change')"
    />
    <textarea
      v-if="multiline"
      :disabled="disabled"
      :name="id"
      :value="data"
      @keyup="$emit('change')"
    />
  </div>
</template>
<script>
export default {
  name: 'OakText',
  props: {
    label: String,
    id: String,
    data: String,
    type: String,
    handleChange: Function,
    errorFields: Object,
    disabled: Boolean,
    rows: Number,
    multiline: Boolean,
    placeholder: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/OakText.scss';
</style>
