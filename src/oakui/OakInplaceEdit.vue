<template>
  <div class="oak-inplace-edit">
    <div class="switchable-cotent">
      <div
        v-bind:id="'inplace-' + id"
        class="editable-content"
        v-bind:class="nopad ? 'nopad' : ''"
        v-if="!switchable || editable"
        contenteditable="true"
        :name="id"
        @blur="handleKeyup"
        @keydown.enter="handleKeyup"
      >
        {{ data[id] }}
      </div>
      <div
        class="view-content one-liner"
        v-bind:class="nopad ? 'nopad' : ''"
        v-else
        @click="showEdit"
      >
        <slot name="view-content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakInplaceEdit',
  props: {
    id: String,
    data: Object,
    nopad: Boolean,
  },
  data: function() {
    return {
      editable: false,
    };
  },
  computed: {
    switchable: function() {
      return this.$slots['view-content'] ? true : false;
    },
    editText: function() {
      return this.data[this.id];
      // let value = this.data[this.id];
      // value = value.replace(/\n+\s+\n+/g, '\n\n');
      // value = value.replace(/\n\n+/g, '\n\n');
      // value = value.replace(/\n/g, '<br>');
      // value = value.replace(/\s+/g, ' ');

      // return value;
    },
  },
  methods: {
    handleKeyup: function(event) {
      event.preventDefault();
      this.editable = !this.editable;
      event.target['value'] = event.target.innerText;
      event.target['name'] = this.id;
      this.$emit('blur', event);
    },
    showEdit: function() {
      this.editable = !this.editable;
      setTimeout(() => {
        document.getElementById(`inplace-${this.id}`)[0].focus();
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.oak-inplace-edit {
  .editable-content,
  .view-content {
    padding: var(--metric-formelement-padding);
    min-height: var(--metric-formelement-height);
    line-height: var(--metric-formelement-height);
  }
  [contenteditable='true'] {
    border: 1px solid transparent;
  }
  [contenteditable='true']:active,
  [contenteditable='true']:focus {
    outline: none;
    border-radius: 4px;
  }
  [contenteditable='true']:focus {
    background-color: var(--color-background-5);
  }
  [contenteditable='true']:hover {
    border: 1px solid var(--color-background-5);
  }
}
</style>
