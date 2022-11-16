<template>

    <ul>
        <slot name="h2"></slot>
        <router-link to="/profile" exact>
            <li>
                <div class="icon">
                    <i class="uil uil-user"></i>
                    <p>My Profile</p>
                </div>

            </li>
        </router-link>
        <router-link to="/task-history" exact>
            <li>
                <div class="icon">
                    <i class="uil uil-apps"></i>
                    <p>Tasks History</p>
                </div>
            </li>
        </router-link>

        <li>
            <div class="icon">
                <i class="uil uil-sun"></i>
                <p>Dark Theme</p>
            </div>

            <div class="toggler" :class="changeStat() ? 'active' : null" @click="dark(this)">
                <span></span>

            </div>
        </li>
        <router-link to="/" exact class="logout">
            <li>
                <div class="icon ">
                    <i class="uil uil-sign-out-alt"></i>
                    <p>Logout</p>
                </div>
            </li>
        </router-link>

        <slot name="p"></slot>
        <slot name="active"></slot>
    </ul>

</template>
<style >
.list {
    color: var(--color-black);
    position: fixed;
    display: flex;
    flex-direction: column;
    background: var(--color-white);
    right: 120px;
    top: 80px;
    border-radius: var(--box-border-raduis);
    overflow: hidden;
    align-items: center;
    justify-content: start;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    z-index: 10;

}

.list li:hover {

    background: var(--color-blue);
    color: var(--color-white);
}

.list li {
    padding: 15px 10px;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;

}

.list li .toggler {
    cursor: pointer;
    display: flex;
}

.icon {
    display: flex;
    width: 100%;
    align-items: center;

    gap: 10px;
    transition: var(--trans);

}



.list li i {
    font-size: var(--font-normal);
}

.list li p {
    font-size: var(--font-normal);
    text-transform: none;
    text-decoration: none;
    font-style: normal;
}

@media screen and (max-width:1200px) {
    .list {
        top: 8%;
        right: 6.3%;
    }
}

@media screen and (max-width :992px) {
    .list {
        display: none;
    }
}
</style>
<script>

export default {

    data() {
        return {
            active: false
        }
    }, methods: {
        changeStat() {
            if (document.body.classList[0] == 'dark') {
                this.active = true;
                return true;
            } else {
                this.active = false;
                return false;

            }
        },
        dark(e) {
            let toggel = document.querySelectorAll('.toggler');
            toggel.forEach((e) => {
                if (document.body.classList[0] == 'dark') {
                    e.classList.remove('active')
                } else {
                    e.classList.add('active')
                }
            })
            document.body.classList.toggle('dark');
            this.active = !this.active;
        }
    }



}
</script>