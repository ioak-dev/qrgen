<template>
  <div class="oak-pagination">
    <div class="space-right-3">
      {{ label ? label : 'Rows per page' }}
    </div>
    <div class="space-right-3">
      <OakSelect
        v-bind:data="data['rowsPerPage']"
        id="rowsPerPage"
        @change="handleChange"
        v-bind:elements="pageSizes ? pageSizes : pageSizesDefault"
      />
    </div>
    <div class="page-number space-right-3">
      <div>
        {{ pageNumberDisplay }}
      </div>
    </div>
    <div class="page-nav">
      <div class="space-right-2">
        <i
          data-test="action-page-previous"
          v-bind:class="previousPageIndicatorStyle"
          @click="previousPage"
        >
          keyboard_arrow_left
        </i>
      </div>
      <div>
        <i
          data-test="action-page-next"
          v-bind:class="nextPageIndicatorStyle"
          @click="nextPage"
        >
          keyboard_arrow_right
        </i>
      </div>
    </div>
  </div>
</template>
<script>
import OakSelect from '@/oakui/OakSelect.vue';
export default {
  name: 'OakPagination',
  props: {
    totalRows: Number,
    label: String,
    pageSizes: Array,
  },
  components: {
    OakSelect,
  },
  data() {
    return {
      data: {
        rowsPerPage: 6,
        pageNo: 1,
      },
      pageSizesDefault: ['6', '10', '20', '50'],
    };
  },
  mounted() {
    if (this.pageSizes) {
      this.data.rowsPerPage = this.pageSizes[0];
    }
  },
  methods: {
    previousPage: function() {
      if (this.data.pageNo !== 1) {
        this.data.pageNo = this.data.pageNo - 1;
        this.pageChanged();
      }
    },
    pageChanged: function() {
      this.$emit('pageChanged', this.data.pageNo, this.data.rowsPerPage);
    },
    nextPage: function() {
      if (
        Math.ceil(this.totalRows / this.data.rowsPerPage) !== this.data.pageNo
      ) {
        this.data.pageNo = this.data.pageNo + 1;
        this.pageChanged();
      }
    },
    handleChange: function() {
      this.data[event.target.name] = event.target.value;
      this.pageChanged();
    },
  },
  computed: {
    pageNumberDisplay: function() {
      let out = (this.data.pageNo - 1) * this.data.rowsPerPage + 1;
      out += ' - ';
      out +=
        this.data.pageNo * this.data.rowsPerPage < this.totalRows
          ? this.data.pageNo * this.data.rowsPerPage
          : this.totalRows;
      out += ' of ';
      out += this.totalRows;
      return out;
    },
    previousPageIndicatorStyle: function() {
      return this.data.pageNo === 1
        ? 'material-icons disabled'
        : 'material-icons';
    },
    nextPageIndicatorStyle: function() {
      return Math.ceil(this.totalRows / this.data.rowsPerPage) ===
        this.data.pageNo
        ? 'material-icons disabled'
        : 'material-icons';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/oak-pagination.scss';
</style>
