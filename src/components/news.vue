<template>
    <main>
        <h2>Most popular</h2>
        <div class="banner">
            <div class="img">
                <img src="../assets/pic.jpg" alt="">
            </div>
            <div class="text">
                <h4>Dribbble Russia VK Community officially launched!</h4>
                <h6>Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers
                    group!</h6>
                <p>Nov 16, 2022</p>
            </div>
        </div>
        <h2>Last news</h2>
        <div class="news">
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
            <div class="new">
                <div class="img">
                    <img src="../assets/new-1.jpg" alt="">
                </div>
                <div class="text">
                    <h5>Incredible 3D illustrations of famous fictional places</h5>
                    <p>Nov 16, 2022</p>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
</script>
<style scoped>
h2 {
    font-size: var(--font-big);
    color: var(--color-black);
    margin-bottom: 25px;
}

h4 {
    font-size: 34px;
    font-weight: 500;
    color: var(--color-black);
}

h5 {
    color: var(--color-black);
    font-size: 20px;
    font-weight: 500;
}

h6 {
    font-size: 18px;
    color: var(--color-black);
    font-weight: 400;

}

p {
    color: var(--color-wblack);
    font-size: 14px;

}

main {
    padding: var(--disktop-padding);
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: var(--bg-gray);
    z-index: 2;
}

.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-white);
    padding: 20px;
    border-radius: var(--box-border-raduis);
    gap: 40px;
}

.banner .img {
    flex: 1 1;
    width: 100%;
}

.img img {
    width: 100%;
    height: 100%;
    border-radius: var(--box-border-raduis);
}

.banner .text {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}

.news {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
}

.new {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    background: var(--color-white);
    border-radius: var(--box-border-raduis);
    width: 30%;
}

.new .img {
    width: 100%;


}

.new .img img {
    border-radius: var(--box-border-raduis);
}

.new .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media screen and (max-width:1200px) {
    .banner {
        flex-direction: column;
    }
}

@media screen and (max-width :992px) {
    h5 {
        font-size: 12px;

    }

    .new {
        width: calc(50% - 15px);
        padding: 10px;
    }

    .banner {
        padding: 10px;
        flex-direction: column;
    }

    .banner .text {
        gap: 10px;
    }

    h4,
    h6 {
        font-size: 18px;
    }

    p {
        font-size: 12px;

    }

    h2 {
        font-size: var(--font-big-m);
    }

    main {
        padding: var(--btn-padding);
        margin-bottom: 80px;
    }


}
</style>