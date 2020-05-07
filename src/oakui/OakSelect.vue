<template>
  <div class="oak-select">
    <select @change="$emit('change')" v-bind:name="id" class="select">
      <option value="" :selected="'' === data"></option>
      <option
        v-for="item in elements"
        :key="item"
        :value="item"
        :selected="item === data"
      >
        {{ item }}
      </option>
      <option
        v-for="item in objects"
        :key="item.key"
        :value="item.key"
        :selected="item.key === data"
      >
        {{ item.value }}
      </option>
    </select>
    <label v-if="label" :for="id" :class="data ? 'active' : ''">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'OakSelect',
  props: {
    id: String,
    label: String,
    error: Boolean,
    data: [String, Number],
    elements: Array,
    objects: Array,
    first: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/oak-select.scss';
</style>
