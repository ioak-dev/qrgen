<template>
  <div class="oak-auto-complete" v-bind:id="id">
    <div class="search-bar">
      <OakText
        id="auto-complete"
        v-bind:data="searchCriteria"
        v-bind:label="label"
        v-bind:placeholder="placeholder"
        @focus="onFocus"
        @change="handleSearch"
      />
    </div>
    <div
      class="results"
      v-if="isSearchOn && filteredList && filteredList.length > 0"
    >
      <div
        class="element"
        v-for="item in filteredList"
        v-bind:key="item.key"
        @click="selected(item.key)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
import OakText from '@/oakui/OakText.vue';
export default {
  name: 'OakAutoComplete',
  components: { OakText },
  props: {
    label: String,
    placeholder: String,
    objects: Array,
    id: String,
  },
  data: function() {
    return {
      isSearchOn: false,
      searchCriteria: '',
    };
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
        this.isSearchOn = false;
      }
    });
  },
  computed: {
    filteredList: function() {
      return this.objects.filter(item =>
        item.value?.toLowerCase().includes(this.searchCriteria.toLowerCase())
      );
    },
  },
  methods: {
    // onBlur() {
    //   console.log('blur');
    //   console.log(event.target);
    //   this.isSearchOn = false;
    // },
    onFocus() {
      this.isSearchOn = true;
    },
    selected(key) {
      this.searchCriteria = '';
      this.isSearchOn = false;
      this.$emit('change', key);
    },
    handleSearch() {
      this.searchCriteria = event.target.value;
    },
  },
};
</script>
<style lang="scss" scoped>
@import './styles/oak-auto-complete.scss';
</style>
