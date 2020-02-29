<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeContent msg="Home page content" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/Home.vue';

export default {
  name: 'Home',
  components: {
    HomeContent,
  },
};
</script>
