<template>
  <div id="app" class="theme_dark themecolor_2">
    <div class="navigation">
      <div>
        <router-link to="/home">
          home
        </router-link>
      </div>

      <div>
        <router-link to="/generate">
          Generate
        </router-link>
      </div>

      <div>
        <router-link to="/view">
          View
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './theme.scss';
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-body);
  color: var(--color-body-invert);
}
.navigation {
  background-color: var(--color-nav);
  // box-shadow: rgba(31,53,78,.11) 0 1px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: var(--height-nav);
  display: flex;
  align-items: center;
}
.navigation a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
}
.navigation a.router-link-active {
  background: var(--color-primary);
  color: var(--color-body);
}
.navigation a:hover {
  background: var(--color-body);
  color: var(--color-body-invert);
}
</style>
