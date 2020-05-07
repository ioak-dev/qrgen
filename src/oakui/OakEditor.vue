<template>
  <div class="oak-editor">
    <label>{{ label }}</label>
    <div
      class="content-section view-section-container"
      @click="toggle"
      v-if="!alwaysEdit && !showEdit"
    >
      <div v-html="data" class="view-section" />
      <div class="edit-icon"><i class="material-icons">edit</i></div>
    </div>
    <div class="content-section" v-else>
      <OakEditorQuill
        v-bind:id="id"
        v-bind:data="data"
        @change="text => $emit('change', text)"
      />
    </div>
  </div>
</template>
<script>
import OakEditorQuill from './OakEditorQuill.vue';
import OakButton from './OakButton.vue';
export default {
  name: 'OakEditor',
  props: {
    id: String,
    data: String,
    alwaysEdit: Boolean,
    label: String,
  },
  data: function() {
    return {
      showEdit: false,
    };
  },
  components: { OakEditorQuill },
  methods: {
    handleChange: function(text) {
      this.$emit('change', text);
    },
    toggle: function() {
      this.showEdit = !this.showEdit;
    },
  },
};
</script>
<style lang="scss" scoped>
.oak-editor {
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 10px;
  label {
    font-size: 1rem;
  }
  .action {
    display: flex;
    justify-content: flex-end;
  }
  .view-section-container {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 10px;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid var(--color-background-5);
    }
    .edit-icon {
      background-color: var(--color-background-5);
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    }
    .view-section {
      &:hover + div {
        visibility: visible;
      }
    }
  }
}
</style>
