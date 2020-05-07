<template>
  <OakModal :visible="visible" @close="$emit('close')" noheader>
    <div slot="modal-body">
      <div
        class="modal-body typography-8 space-top-4 space-bottom-4 confirmation-text"
      >
        {{ text ? text : 'Are you sure you want to continue?' }}
      </div>
    </div>
    <div slot="modal-footer">
      <div class="modal-footer">
        <OakButton
          data-test="action-close"
          @click="$emit('close')"
          theme="default"
          variant="animate in"
          align="left"
          label="No"
          fa="fas fa-times"
        />
        <OakButton
          data-test="action-proceed"
          @click="
            $emit('click');
            $emit('close');
          "
          theme="primary"
          variant="animate out"
          align="right"
          label="Yes"
          fa="fas fa-check"
        />
      </div>
    </div>
  </OakModal>
</template>
<script>
import OakModal from './OakModal.vue';
import OakButton from './OakButton.vue';

export default {
  name: 'OakPrompt',
  components: { OakModal, OakButton },
  props: {
    visible: Boolean,
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/OakDialog.scss';
</style>
