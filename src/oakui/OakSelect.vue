<template>
  <div class="oak-select" :class="style">
    <label v-if="label">{{ label }}</label>
    <div class="select-button" @click="toggle">
      <div v-if="elements">
        {{ data }}
      </div>
      <div v-else-if="objects">
        {{
          objects.find(element => element.key === data) &&
            objects.find(element => element.key === data).value
        }}
      </div>
      <div>
        <i class="material-icons">keyboard_arrow_down</i>
      </div>
    </div>
    <div class="dropdown" :class="show ? 'show' : 'hide'">
      <div class="dropdown-content">
        <div
          v-if="this.first"
          class="option"
          @click="changeSelection(this.first)"
        >
          {{ first }}
        </div>
        <div
          v-if="this.firstAction"
          class="option"
          @click="changeSelection(this.firstAction)"
        >
          {{ firstAction }}
        </div>
        <!-- {dropdownList} -->
        <div v-for="item in elements" :key="item">
          <div class="option" @click="changeSelection(item)">
            {{ item }}
          </div>
        </div>
        <div v-for="item in objects" :key="item.key">
          <div class="option" @click="changeSelection(item.key)">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakSelect',
  props: {
    id: String,
    label: String,
    handleChange: Function,
    error: Boolean,
    data: String,
    elements: Array,
    objects: Array,
    first: String,
    firstAction: String,
    variant: String,
    theme: String,
    width: String,
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
      style += this.variant ? ` ${this.variant}` : '';
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/OakSelect.scss';
</style>
