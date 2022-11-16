<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="">
    <p>Promotion.com</p>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo p {
  font-size: var(--icons-font-size);
  font-weight: var(--font-weigth-big);
  color: var(--color-black);
}

@media screen and (max-width :992px) {

  p {
    font-size: 16px !important;
  }

  .logo img {
    width: 30px;
  }
}
</style>