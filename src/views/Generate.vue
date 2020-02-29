<template>
  <div class="generate">
    <div class="form">
      <oak-button
        label="new"
        theme="primary"
        variant="animate in"
        @click="toggleEditDialog"
      />
      <!-- <oak-dialog v-bind:visible="isEditDialogOpen" v-on:click="toggleEditDialog"> -->
      <qr-edit :visible="isEditDialogOpen" @toggle="toggleEditDialog" />
      <!-- </oak-dialog> -->
    </div>
  </div>
</template>

<script>
import QrEdit from '../components/QrEdit.vue';
import OakButton from '../oakui/OakButton.vue';

export default {
  name: 'Generate',
  components: {
    QrEdit,
    OakButton,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      isEditDialogOpen: false,
    };
  },
  methods: {
    handleChange() {
      this.data[event.target.name] = event.target.value;
      this.submit();
    },
    toggleEditDialog() {
      this.isEditDialogOpen = !this.isEditDialogOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.generate {
  // width: 80vw;
  margin: auto;
  // margin-top: 50px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto;
}
</style>
