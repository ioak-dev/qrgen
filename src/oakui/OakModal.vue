<template>
  <div
    v-if="nodeVisible"
    class="modal-root"
    :class="visible ? 'show ' + style : 'hide ' + style"
  >
    <div class="backdrop-fade" @click="$emit('close')" />
    <div class="oak-modal">
      <div class="modal" v-bind:class="error ? 'error' : ''">
        <div :class="visible ? 'container' : 'container hidetext'">
          <div class="modal-header">
            <div class="left">
              <div class="icon">
                <!-- <i className="material-icons">blur_on</i> -->
                N
              </div>
              <div class="label one-liner">{{ label }}</div>
            </div>
            <div class="right">
              <div @click="$emit('close')">
                <i class="material-icons">close</i>
                <div class="text-esc">esc</div>
              </div>
            </div>
          </div>
          <template v-if="$slots['modal-container']">
            <slot name="modal-container" />
          </template>
          <div v-if="$slots['modal-body']" class="modal-body">
            <slot name="modal-body" />
          </div>
          <div v-if="$slots['modal-footer']" class="modal-footer">
            <slot name="modal-footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OakModal',
  props: {
    visible: Boolean,
    label: String,
    fullscreen: Boolean,
    noheader: Boolean,
    donotMobilize: Boolean,
    error: Boolean,
  },
  data() {
    return {
      style: this.getStyle(),
      nodeVisible: false,
    };
  },
  mounted() {
    document.addEventListener('keydown', this.escFunction, false);
  },
  methods: {
    getStyle() {
      let style = '';
      style += this.noheader ? ' noheader' : '';
      style += this.fullscreen ? ' fullscreen' : '';
      style += this.donotMobilize ? '' : ' mobilize';
      return style;
    },
    escFunction(event) {
      if (event.keyCode === 27) {
        if (this.visible) {
          this.$emit('close');
        }
      }
    },
  },
  watch: {
    visible: function(newValue, oldValue) {
      if (newValue != oldValue) {
        if (newValue) {
          this.nodeVisible = newValue;
        } else {
          setTimeout(() => (this.nodeVisible = newValue), 200);
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/oak-modal.scss';
</style>
