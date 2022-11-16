<template>

    <div class="user">
        <div class="balance">
            <i class="uil uil-plus" style="color:#fff"></i>
            <div>
                <i class="uil uil-coins"></i>
                <p>2023</p>
            </div>

        </div>
        <img src="../assets/profile-12.jpg" alt="">
        <i class="uil uil-angle-down " :class="activeList ? 'active' : null" @click="showList()"
            style="color:var(--drop-menu-color); font-size: 25px;"></i>
    </div>
    <list v-if="activeList" class="list" :active="active"></list>
</template>
<script>
import list from './list.vue'
export default {
    components: {

        'list': list,
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

    }
}
</script>
<style scoped>
.user {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);

}

.user .balance {
    display: flex;
    gap: 20px;
    align-items: center;
    color: var(--color-black);
    padding: 5px 10px;
    border-radius: 1rem;
    background: var(--bg-white);

}

.balance>div {
    display: flex;
    gap: 5px;
    align-items: center;
}

i {
    font-size: var(--font-normal);
}

.user>i,
.balance>i {
    cursor: pointer;
    font-size: var(--font-normal);
}

.user i.active {
    color: var(--color-blue);
    transform: rotateX(180deg);
}


.user .balance>i {
    margin-right: 5px;
    background: var(--color-blue);
    padding: 5px;
    border-radius: 10px;
    color: var(--color-white);
}

.user .profile {
    gap: 10px;
    display: flex;
}


.user img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

@media screen and (max-width :992px) {
    .logo p {
        font-size: var(--font-normal);
    }

    .user .balance {

        gap: 0;
    }

    .user img {
        display: none;
    }

    .user>i {
        display: none;
    }

    i {
        font-size: var(--font-small-m) !important;
    }

    .user {
        font-size: var(--font-small-m) !important;
    }
}
</style>