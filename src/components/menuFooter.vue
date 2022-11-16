<template >

    <menu-nav>

    </menu-nav>

</template>
<script>

import menuNav from './menuNav.vue'
export default {

    components: {
        'menu-nav': menuNav
    },
}
</script>
<style scoped>
.menu {
    padding: 15.5px 15px;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    width: 100%;
    z-index: 5;
    gap: 10px;
    display: none;

}

.menu>:last-child {
    display: flex !important;
}




@media screen and (max-width :992px) {
    .menu {
        display: flex;
    }

    a p {
        display: none !important;
    }
}
</style>