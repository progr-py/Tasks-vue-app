<template>
    <div id="root">
        <h2>Profile</h2>
        <div id="main">
            <div class="left item">
                <div class="avatar">
                    <img src="../assets/avatar.jpg" alt="">
                    <div class="upload">
                        <i class="uil uil-plus"></i>
                        <p>Upload new photo</p>
                    </div>
                </div>
                <div class="social-media">
                    <div class="button" @click="e => e.target.classList.toggle('active')">
                        <div>
                            <i class="uil uil-facebook"></i>
                            <p>Facebook</p>
                        </div>
                        <div>
                            <i class="uil uil-plus"></i>
                        </div>

                    </div>
                    <div class="button" @click="e => e.target.classList.toggle('active')">
                        <div>
                            <i class="uil uil-twitter"></i>
                            <p>Twitter</p>
                        </div>
                        <div>
                            <i class="uil uil-plus"></i>
                        </div>

                    </div>
                    <div class="button" @click="e => e.target.classList.toggle('active')">
                        <div>
                            <i class="uil uil-telegram"></i>
                            <p>Telegram</p>
                        </div>
                        <div>
                            <i class="uil uil-plus"></i>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mid item">
                <div class="links">
                    <div class="link">
                        <h4>Instagram Link</h4>
                        <input type="text">
                    </div>
                    <div class="link">
                        <h4>Telegram Link</h4>
                        <input type="text">
                    </div>
                </div>

                <div class="email link">
                    <h4>E-Mail</h4>
                    <input type="email">
                </div>
                <div class="passwords">
                    <h4>Password Mangment</h4>
                    <div class="link">
                        <h4>Primary paswword</h4>
                        <input type="password">
                    </div>
                    <div class="link">
                        <h4>Primary password</h4>
                        <input type="password">
                    </div>
                </div>
                <div class="button">Save changes</div>
            </div>
            <div class="rigth item">
                <h4>Personal static</h4>
                <div class="static">
                    <i class="uil uil-heart-alt"></i>
                    <div>
                        <h6>2 526</h6>
                        <p class="text-muted">Likes delivered for all time</p>
                    </div>
                </div>
                <div class="static">
                    <i class="uil uil-user-plus" style="background:#F0DEFF; color:#A86CE4 ;"></i>
                    <div>
                        <h6>15</h6>
                        <p class="text-muted">New users invited</p>
                    </div>
                </div>
                <div class="static">
                    <i class="uil uil-calendar-alt" style="background:#DEFFE5; color:#50D86A ;"></i>
                    <div>
                        <h6>329</h6>
                        <p class="text-muted">Days since registration</p>
                    </div>
                </div>
                <div class="static">
                    <i class="uil uil-usd-circle" style="background:#FFF6DE; color:#FFA10B ;"></i>
                    <div>
                        <h6>$ 1456,23</h6>
                        <p class="text-muted">Real money spent</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
#root {
    padding: var(--disktop-padding);
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--color-black) !important;
}

h4 {
    font-size: var(--font-small);
    font-weight: var(--font-weigth-big);
    color: var(--color-wblack);

}

#main {
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    align-content: start;
    gap: 80px;
}

.item {
    flex: 1 1 auto;

}

h2 {
    font-size: var(--font-big);
    font-weight: var(--font-weigth-big);
}

.left {
    display: flex;
    flex-direction: column;
    gap: 30px;

    color: var(--color-black);

}

.mid {

    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.email {
    margin-top: 20px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.passwords {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.passwords>h4:first-child {
    margin-bottom: -10px;

}

.link {
    display: flex;
    flex-direction: column;
    gap: 10px;
}



.mid .button {
    padding: 10px;
    border-radius: var(--box-border-raduis);
    border: 2px solid var(--color-blue);
    text-align: center;
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);
    cursor: pointer;
    transition: var(--trans);

}

.mid .button:hover {
    background: var(--color-blue);
    color: #fff;

}

.mid input {
    width: 100%;
    padding: 15px 20px;
    border-radius: var(--box-border-raduis);
    background: var(--bg-white);
    color: var(--color-black);
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);
}

.rigth {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;

}

.avatar {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--color-white);
    padding: 20px;
    border-radius: var(--box-border-raduis);
    align-items: center;
}

.avatar img {
    width: 250px;
    height: 250px;
    border-radius: var(--box-border-raduis);

}

.avatar .upload {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 15px;
    border: 2px solid var(--bg-white);
    border-radius: var(--box-border-raduis);
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);
    cursor: pointer;
    width: 100%;
    transition: var(--trans);

}

.upload:hover {
    background: var(--color-blue);
    color: #fff;
}

.social-media {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.social-media .button {
    background: var(--color-white);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-normal);
    font-weight: var(--font-weigth-big);
    border-radius: var(--box-border-raduis);
    width: 100%;
}

.button div {
    display: flex;
    gap: 5px;
    align-items: center;

}

.button div:nth-child(1) i {
    font-size: 30px;
    color: var(--color-blue);
}

.button div:nth-child(2) i:nth-child(1) {
    background: var(--color-blue);
    color: #fff;
    border-radius: 50%;

}

.button div:nth-child(2) i:nth-child(2) {
    background: var(--color-green);
    color: var(--color-white);
    border-radius: 50%;

}


.static {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: start;
    background: var(--color-white);
    padding: 15px;
    border-radius: var(--box-border-raduis);
}

.static div h6 {
    font-size: var(--font-big-m);
    font-weight: var(--font-weigth-big);
    width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.static i {
    font-size: var(--font-big-m);
    color: var(--color-red);
    background: #FFCECE;
    padding: 5px;
    border-radius: 12px;
}

.static div p {
    color: var(--muted-text);
    font-size: var(--font-normal);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

@media screen and (max-width:1200px) {
    .static div p {
        width: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}

@media screen and (max-width :992px) {

    #root {
        padding: var(--btn-padding);
        margin-bottom: 80px;
    }

    #main {

        gap: 30px;

    }

    h2 {
        font-size: var(--font-big-m);
    }

    .left {
        gap: 10px;
    }

    .left .social-media {
        gap: 10px;
    }


    .mid {
        gap: 15px;
    }

    .mid :nth-child(4) {
        margin: 10px 0 0;
    }

    .mid .button {
        margin-top: 20px;
    }

    .links {

        gap: 15px;
    }

    .rigth {
        margin-top: 30px;
    }

    .link {
        gap: 10px;
    }

    .passwords {
        margin-top: 15px;
        gap: 15px;
    }

    .email {
        margin: 0;
    }

    .static div h6 {
        font-size: 18px !important;
    }

    .static div p {
        font-size: 14px !important;
        width: 100%;
    }

    .rigth {
        gap: 10px;
    }

    .static p,
    .static h6 {
        width: 100%;
    }

    .avatar {
        padding: 10px;
    }

    .avatar img {
        width: 100%;
        height: 100%;
    }
}

/* @media screen and (max-width:1100px) {
   
  








} */
</style>