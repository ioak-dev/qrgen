<template>
  <div class="oak-text-field">
    <input
      v-if="!multiline"
      :disabled="disabled"
      autoComplete="off"
      :type="type ? type : 'text'"
      :name="id"
      :value="data"
      @keyup="$emit('change')"
      @blur="blurEvent"
      @focus="$emit('focus')"
    />
    <textarea
      v-else
      :disabled="disabled"
      :name="id"
      :value="data"
      v-bind:rows="rows"
      @keyup="$emit('change')"
      @blur="blurEvent"
    />
    <label v-if="label" :for="id" :class="data ? 'active' : ''">
      {{ label }}
    </label>
  </div>
</template>
<script>
import { sendMessage } from '@/events/MessageService';
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
  methods: {
    blurEvent: function() {
      this.$emit('blur');
      sendMessage('blur', true, {
        id: this.id,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/OakText.scss';
</style>
