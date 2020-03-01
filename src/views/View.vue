<template>
  <div class="view">
    <h1>List of saved QR codes page</h1>
    <div v-for="item in getQrcodes" v-bind:key="item.id">
      <QrcodeLink v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import QrcodeLink from '../components/QrcodeLink';

export default {
  name: 'Board',
  components: {
    QrcodeLink,
  },
  methods: {
    ...mapActions(['fetchQrcodes']),
  },
  computed: mapGetters(['getQrcodes']),
  created() {
    this.fetchQrcodes();
  },
};
</script>
