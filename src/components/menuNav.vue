<template>

    <div class="menu">
        <router-link to="/" exact>
            <i class="uil uil-apps"></i>
            <p>Task list</p>
        </router-link>

        <router-link to="/news" exact>
            <i class="uil uil-globe
            "></i>
            <p>News</p>
        </router-link>

        <router-link  exact>
            <i class="uil uil-question-circle"></i>
            <p>Help</p>
        </router-link>
        <router-link to="/menu" exact v-if="show" id="menu-last">
            <i class="uil uil-bars"></i>
            <p>menu</p>
        </router-link>
    </div>

</template>
<script>
export default {

    data() {
        return {
            width: window.innerWidth,
            show: null,
        }
    },
    methods: {
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
.menu {
    display: flex;
    gap: 40px;
    background: var(--color-white);
}

.menu a {
    display: flex;
    gap: 10px;
    color: var(--color-gray);
    cursor: pointer;
    font-size: 18px;
}

#menu-last {
    display: none;
}

@media screen and (max-width :992px) {
    a p {
        display: none;
    }

    .menu {
        display: none;
    }
}
</style>