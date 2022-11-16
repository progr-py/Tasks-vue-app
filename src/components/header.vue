<template>
  <header>
    <logo></logo>
    <menu-nav></menu-nav>
    <user></user>
  </header>

</template>
<script>
import list from './list.vue'
import user from './user.vue'
import logo from './logo.vue'
import menuNav from './menuNav.vue'

export default {

  components: {

    'user': user,
    'list': list,
    'menu-nav': menuNav,
    'logo': logo
  },
  data() {
    return {
      width: window.innerWidth,
      show: null,

    }
  }, methods: {

  },
  mounted() {
    window.addEventListener('resize', () => {
      this.width = window.innerHeight
      if (this.width < 992) {
        this.show = true
      } else {
        this.show = false
      }

    })
  }, beforeMount() {
    if (this.width < 992) {
      this.show = true
    } else {
      this.show = false;
    }
  }
}
</script>
<style scoped>
header {
  z-index: 12;
  display: flex;
  align-items: center;
  padding: var(--disktop-padding);
  justify-content: space-between;
  background: var(--color-white);
  position: relative;
  position: sticky;
  top: 0;
  width: 100%;

}

.active-menu {
  color: var(--color-black) !important;
}

@media screen and (max-width:1200px) {
  header {
    padding: var(--tablet-padding);
  }
}

@media screen and (max-width :992px) {

  header {
    z-index: 5;
    width: 100%;
    padding: var(--btn-padding);
    position: sticky;
    top: 0;
  }
}
</style>