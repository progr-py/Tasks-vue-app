<template >

    <list class="menu-list">
        <template #h2>
            <h2>Menu</h2>
        </template>
        <template #p>
            <p>© 2022 - All Rights Lecensed</p>
        </template>
    </list>
</template>
<script>
import list from './list.vue'
export default {

    components: {
        'list': list
    },

    data() {
        return {

        }
    }, methods: {


    },
}
</script>
<style  >
.menu-list {
    padding: 30px 15px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--color-black);
}

footer {
    display: none !important;
    ;
}

.menu-list li {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 10px;
    border-radius: var(--box-border-raduis);
    cursor: pointer;
    position: relative;
    transition: var(--trans);
}




.menu-list li::before {
    position: absolute;
    width: 5px;
    content: '';
    left: 0;
    height: 100%;
    background: var(--color-blue);
    filter: opacity(0);
    transition: var(--trans);
}

.menu-list :hover::before {
    filter: opacity(1);
}

.menu-list :hover i {
    color: var(--color-blue);
}

h2 {
    font-size: var(--font-big-m);
    font-weight: var(--font-weigth-big);
}

.menu-list>p {
    margin-top: 30px;
    text-align: center;
}

a {
    color: var(--color-black)
}

a:active {
    color: var(--color-black) !important;
}

@media screen and (max-width :992px) {}
</style>