<template>

    <main>
        <h2>Task creation</h2>
        <div class="networks row">
            <h5>Select a social network</h5>
            <div class="social-buttons">
                <div class="social-button " @click="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-dribbble" style="background:#EA4C89;"></i>
                        <p>Dribbble</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check "></i>
                    </div>
                </div>
                <div class="social-button " @click="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-behance" style="background:#0057FF;"></i>
                        <p>Behance</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check "></i>
                    </div>
                </div>


            </div>
        </div>
        <div class="type row">
            <h5>Task type</h5>
            <div class="social-buttons ">
                <div class="social-button " @click.prevent="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-heart-alt" style="background:#FFCECE; color:#E24444 ;"></i>
                        <p>Like</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check "></i>
                    </div>
                </div>
                <div class="social-button " @click="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-users-alt" style="background:#F0DEFF; color:#A86CE4 ;"></i>
                        <p>Followers</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check "></i>
                    </div>
                </div>
                <div class="social-button " @click="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-comment-dots" style="background:#DEFFE5; color:#50D86A ;"></i>
                        <p>Comment</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check "></i>
                    </div>
                </div>
                <div class="social-button " @click="e => e.target.classList.toggle('active')">
                    <div class="left">
                        <i class="uil uil-eye" style="background:#FFF6DE; color:#FFA10B ;"></i>
                        <p>View</p>
                    </div>
                    <div class="rigth">
                        <i class="uil uil-check"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-link row">
            <h5>Project link</h5>
            <h6>For example: https://dribbble.com/shots/Example-Name</h6>
            <input type="text">
        </div>
        <div class="cost-quantity">
            <div class="cost box">
                <h5>Execution cost</h5>
                <h6>At least 20 coins for execution (50% site commission)</h6>
                <div class="input">
                    <i class="uil uil-coins"></i>
                    <p>30</p>
                </div>
            </div>
            <div class="quantity box">
                <h5>How much do you need?</h5>
                <h6>At least 10 executions, a maximum of 1000</h6>
                <div class="input">
                    <i class="uil uil-bolt-alt"></i>
                    <p>500</p>
                </div>
            </div>
            <div class="top box">
                <h5>Pin my task to the top</h5>
                <h6>Additional cost is charged - 500 coins </h6>
                <div class="input">
                    <i class="uil uil-check active"></i>


                </div>
            </div>

        </div>
        <div class="create-button">
            <h6>Create task</h6>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {

        }
    }, methods: {

    },
}
</script>
<style scoped>
h2 {
    font-size: var(--font-big);
    color: var(--color-black)
}

h5 {
    font-size: var(--font-small);
    font-weight: var(--font-weigth-big);
    color: var(--color-wblack);
}

i {
    font-size: 20px;
    border-radius: var(--box-border-raduis);
    color: var(--color-white);
}

h6 {
    font-size: var(--font-small);
    font-weight: 400;
    color: var(--color-wblack);
}

input {
    width: 100%;
    padding: 15px 20px;
    border-radius: var(--box-border-raduis);
    background: var(--bg-white);
    color: var(--color-black);
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);
}

main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: var(--disktop-padding);
}

.row {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.social-buttons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.social-button {
    width: 290px;
    height: 60px;
    background: var(--color-white);
    padding: 10px;
    border-radius: var(--box-border-raduis);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: var(--color-black);
}

.active .rigth i {
    background: var(--color-green);
    border: 0 !important;
    font-size: 17px !important;
    color: #fff !important;
}

.social-button .left {
    display: flex;
    gap: 10px;
    align-items: center;
}

.left i {
    background: violet;
    border-radius: var(--box-border-raduis);
    color: #fff;
}



.social-button .rigth i {
    border: 2px solid #8E8E96;
    cursor: pointer;
    font-size: 15px;
}

.cost-quantity {
    display: flex;
    justify-content: space-between;
}

.box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
}

.input {
    display: flex;
    gap: 5px;
    align-items: center;
    background: var(--bg-white);
    border-radius: var(--box-border-raduis);
    padding: var(--btn-padding);
    width: fit-content;
    color: var(--color-black);

}

.input i,
input p {
    color: var(--color-black);
}

.input i:last-child {
    color: #fff;
    background: var(--color-green);
}

.create-button:hover {
    background: var(--color-blue);
    color: #fff;
}

.create-button {
    cursor: pointer;
    width: fit-content;
    padding: var(--btn-padding);
    border-radius: var(--box-border-raduis);
    border: 2px solid var(--color-blue);

}

.create-button h6 {
    color: var(--color-black);
    font-weight: 5 00;
}

@media screen and (max-width:1200px) {
    main {
        padding: var(--tablet-padding);
    }

}

@media screen and (max-width :992px) {
    main h2 {
        font-size: var(--font-big-m);
    }

    main {
        padding: var(--btn-padding);
        margin-bottom: 80px;

        gap: 30px;
    }

    .social-buttons {
        gap: 10px;
        flex-direction: column;

    }

    .social-button {
        width: 100%;
    }

    i {
        font-size: 18px;

    }

    .social-button .left i {

        border-radius: 13px;
    }

    .social-button .rigth i.active {
        background: var(--color-green);
        border: 0;
        font-size: 18px;
    }

    .cost-quantity {
        flex-direction: column;
        gap: 30px;
    }
}
</style>