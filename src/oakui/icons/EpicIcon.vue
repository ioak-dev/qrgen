<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 24 24"
    enable-background="new 0 0 24 24"
    xml:space="preserve"
    :style="dimension"
  >
    <path fill="none" d="M0,0h24v24H0V0z" />
    <path
      d="M20.2,7.3c0.8,1.4,1.3,3,1.3,4.7c0,5.2-4.2,9.5-9.5,9.5S2.5,17.2,2.5,12S6.8,2.5,12,2.5c0.6,0,1.1,0.1,1.7,0.2l0.2-1.8
	c-0.6-0.1-1.2-0.2-1.8-0.2C5.8,0.7,0.7,5.8,0.7,12c0,6.2,5.1,11.3,11.3,11.3c6.2,0,11.3-5.1,11.3-11.3c0-2-0.5-3.9-1.4-5.5L20.2,7.3
	z"
      :style="primaryStyle"
    />
  </svg>
</template>
<script>
export default {
  name: 'EpicIcon',
  props: { primaryStyle: Object, accentStyle: Object, dimension: Object },
};
</script>
