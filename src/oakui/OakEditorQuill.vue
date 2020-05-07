<template>
  <div class="oak-editor-quill">
    <!-- <div id="toolbar">
      <button class="ql-bold">Bold</button>
      <button class="ql-italic">Italic</button>
    </div> -->
    <!-- <div
      class="container"
      v-html="data"
      v-bind:class="'oak-editor-' + id"
    ></div> -->
    <!-- <div ref="editor" v-html="data"></div> -->
    <div v-bind:ref="'editor-' + id" v-bind:id="'editor-' + id"></div>
  </div>
</template>
<script>
import Quill from 'quill';
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button
];
export default {
  name: 'OakEditorQuill',
  props: {
    id: String,
    data: String,
  },

  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Quill(this.$refs[`editor-${this.id}`], {
      modules: {
        // toolbar: [
        //   [{ header: [1, 2, 3, 4, false] }],
        //   [
        //     'bold',
        //     'italic',
        //     'underline',
        //     'strike',
        //     'code-block',
        //     { header: 1 },
        //   ],
        // ],
        toolbar: toolbarOptions,
      },
      theme: 'snow',
      formats: [
        'bold',
        'underline',
        'header',
        'italic',
        'strike',
        'code-block',
        'list',
        'color',
        'font',
        'indent',
      ],
    });

    this.editor.root.innerHTML = this.data;

    this.editor.on('text-change', () => this.update());
  },
  // watch: {
  //   data: function() {
  //     if (!this.initialized) {
  //     console.log(this.data);
  //     this.editor.root.innerHTML = this.data;
  //     }
  //   },
  // },
  methods: {
    update() {
      this.$emit(
        'change',
        this.editor.getText() ? this.editor.root.innerHTML : ''
      );
    },
  },
};
</script>
<style lang="scss" scoped>
// .container {
//   background-color: white;
// }
.oak-editor-quill {
  background-color: var(--color-background-5) !important;
}
</style>
