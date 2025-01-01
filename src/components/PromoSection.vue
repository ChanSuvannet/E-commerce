<template>
  <section class="promo">
    <div class="banner">
      <h1>HAPPY CHINESE NEW YEAR 2025</h1>
      <CountdownTimer deadline="2025-1-31T23:59:59" />
    </div>
  </section>
</template>

<script>
import CountdownTimer from "./CountdownTimer.vue";

export default {
  name: "PromoSection",
  components: {
    CountdownTimer,
  },
};
</script>

<style scoped>
.banner {
  font-size: 56px;
  color: #0f1253;
  text-decoration: bold;
  text-align: center;
}

</style>
