<template>
  <div class="oak-attach">
    <div
      class="drop-container"
      v-bind:class="dragClass"
      @dragover.prevent="dragOver"
      @drop.prevent="drop"
      @dragleave="dragLeave"
    >
      <div><i class="material-icons">cloud_upload</i></div>
      <div>Drop your files here</div>
      <div>or</div>
      <div class="file-input">
        <label class="file-upload space-top-1 space-bottom-4">
          <input
            type="file"
            @change="chooseFiles"
            multiple="multiple"
            required
          />
          <div class="action">
            <i class="material-icons">attach_file</i>
            <div class="text">Browse</div>
          </div>
        </label>
      </div>
    </div>
    <div class="file-names">
      <div v-for="item in files" v-bind:key="item.name" class="typography-3">
        {{ item.name }}
      </div>
    </div>
    <!-- <div class="file-input">
      <label class="file-upload space-top-1 space-bottom-4">
        <input type="file" @change="chooseFiles" multiple="multiple" required />
        <i class="material-icons">attach_file</i>
        Browse
      </label>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'OakAttach',
  data: function() {
    return {
      dragClass: '',
      files: [],
    };
  },
  methods: {
    dragOver(e) {
      this.dragClass = 'dropping';
    },
    dragLeave(e) {
      this.dragClass = '';
    },
    drop(e) {
      this.dragClass = '';
      this.processFiles(e.dataTransfer.files);
      this.dragClass = '';
    },
    chooseFiles(e) {
      this.processFiles(e.target.files);
    },
    processFiles(files) {
      this.files = files;
      this.$emit('change', files);
    },
  },
};
</script>
<style lang="scss" scoped>
.oak-attach {
  user-select: none;
  display: flex;
  flex-direction: column;
  .drop-container {
    border-radius: 6px;
    // border: 1px solid var(--color-foreground-4);
    // background-color: var(--color-formelement-bg-2);
    border: 1px dashed white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: var(--metric-typography-12);

    .material-icons {
      font-size: 100px;
    }

    &.dropping {
      //   border: 1px solid var(--color-secondary-1);
      background-color: var(--color-formelement-bg-1);

      .material-icons {
        color: var(--color-secondary-1);
      }
    }
  }
  .file-names {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: var(--color-foreground-3);
  }
  .file-input {
    display: flex;
    justify-content: flex-end;

    .file-upload {
      border-radius: 6px;
      // background-color: var(--color-formelement-bg-1);
      // padding: 6px 12px;
      cursor: pointer;
      input {
        display: none;
      }
      //   border: 1px solid var(--color-formelement-fg);
      display: flex;
      align-items: center;
      .action {
        display: flex;
        align-items: center;
        .text {
          &:hover {
            text-decoration: underline;
          }
        }
        .material-icons {
          font-size: 1em;
        }
      }
    }
  }
}
</style>
