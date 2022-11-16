<template>

  <app-header></app-header>
  <router-view :active="active"></router-view>
  <footer>
    <div class="icons">
      <i class="uil uil-twitter"></i>
      <i class="uil uil-facebook-f"></i>
      <i class="uil uil-telegram-alt"></i>
    </div>
    <p>
      © 2022 - All Rights Lecensed
    </p>
    <p>
      For commercial inquiries
    </p>
  </footer>
  <menu-footer></menu-footer>
</template>
<script>
import menu from './components/menu.vue'
import header from './components/header.vue'
import menuFooter from './components/menuFooter.vue'
export default {

  components: {
    'menu-app': menu,
    'app-header': header,
    'menu-footer': menuFooter
  },
  data() {
    return {
      activeList: null,
      darkTheme: false,
      active: false,
    }
  }, methods: {
    changeStat() {
      this.active = !this.active


    },

    showList() {

      if (this.activeList == false) {
        this.activeList = true;

      } else {
        this.activeList = false;
      }
    }

  }, destroyed() {
    console.log('update')
    let toggel = document.querySelectorAll('.toggler');
    toggel.forEach((e) => {
      if (document.body.classList[0] == 'dark') {
        e.classList.remove('active')
      } else {
        e.classList.add('active')
      }
    });
  },

}

</script>
<style scoped>

</style>
