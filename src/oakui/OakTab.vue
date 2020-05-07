<template>
  <div class="oak-tab">
    <div class="header" ref="header">
      <div
        v-for="item in meta"
        v-bind:key="item.slotName"
        class="tab typography-6"
        v-bind:class="activeTab === item.slotName ? 'active' : ''"
        @click="switchTab(item.slotName)"
      >
        <div class="icon">
          <i
            class="material-icons typography-8"
            v-bind:class="activeTab === item.slotName ? 'active' : ''"
            >{{ item.icon }}</i
          >
        </div>
        <div class="label">{{ item.label }}</div>

        <!-- <div class="tooltip">
          Hover over me
          <span class="tooltiptext">Tooltip text</span>
        </div> -->
      </div>
    </div>
    <div
      v-for="item in meta"
      v-bind:key="item.slotName"
      class="content"
      v-bind:class="item.slotName === activeTab ? 'active' : 'inactive'"
    >
      <slot v-bind:name="item.slotName" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakTab',
  props: {
    meta: Array,
  },
  data: function() {
    return {
      activeTab: '',
    };
  },
  mounted() {
    this.activeTab =
      this.meta && this.meta.length > 0 ? this.meta[0].slotName : '';
    // console.log(document.getElementsByClassName('oak-tab')[0]);
    // console.log(document.getElementsByClassName('oak-tab')[0].clientWidth);
    // console.log(this.$refs.header.clientWidth);
  },
  methods: {
    switchTab: function(activeTab) {
      this.activeTab = activeTab;
    },
  },
};
</script>
<style lang="scss" scoped>
@import './styles/oak-tab.scss';
</style>
