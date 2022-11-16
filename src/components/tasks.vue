<template>
  <main>
    <div class="text-btn">
      <h1>Task List</h1>
      <router-link to="/create-task" exact class="button">
        <i class="uil uil-plus"></i>
        <p>Create task</p>
      </router-link>


    </div>
    <div class="tasks">
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-19.jpg" alt="" />
            <div class="text">
              <h4>Tran Manu Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-18.jpg" alt="" />
            <div class="text">
              <h4>Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post1.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-6.jpg" alt="" />
            <div class="text">
              <h4>Tran Manu Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post2.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-7.jpg" alt="" />
            <div class="text">
              <h4>Tran Manu Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post3.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-8.jpg" alt="" />
            <div class="text">
              <h4>Tran Manu Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post4.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>
      <div class="task">
        <div class="user">
          <div>
            <img src="../assets/profile-9.jpg" alt="" />
            <div class="text">
              <h4>Tran Manu Tri Tam</h4>
              <p>Like</p>
            </div>
          </div>

          <i class="uil uil-ellipsis-v"></i>

        </div>
        <img src="../assets/post5.jpg" alt="">
        <div class="go">
          <h5>Perform a task</h5>
        </div>
      </div>

    </div>
  </main>

</template>
<style scoped >
i {
  font-size: 20px !important;
}

main {
  padding: 40px 110px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--bg-gray);
  z-index: 2;
}

main h1 {
  font-size: var(--font-big);
  font-weight: var(--font-weigth-big);
  color: var(--color-black)
}

.text-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  align-items: center;
  display: flex;
  padding: var(--btn-padding);
  border-radius: var(--box-border-raduis);
  background-color: var(--bg-white);
  cursor: pointer;
  font-size: var(--font-normal);
  color: var(--color-black);
}

.button:hover {
  background: var(--color-blue);
  color: #fff;
}

main .tasks {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

}

main .tasks .task {
  background: var(--color-white);
  border-radius: var(--box-border-raduis);
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
  transition: var(--trans);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

main .tasks .task .user {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

main .tasks .task .user>div {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

main .tasks .task .user>div img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

main .tasks .task .user>i {
  cursor: pointer;
  font-size: var(--icons-font-size);
  color: var(--color-gray);
}

main .tasks .task .user .text h4 {
  font-size: var(--font-normal);
  font-weight: var(--font-weigth-big);
  color: var(--color-black);

}

main .tasks .task .user .text p {
  font-size: var(--font-small);
  color: var(--color-gray);
}


.task>img {
  border-radius: var(--box-border-raduis);
}

.task .go {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  border: 2px solid var(--color-blue);
  border-radius: var(--box-border-raduis);
  color: var(--color-black);
  cursor: pointer;
  transition: var(--trans);
  position: relative;
  font-size: var(--font-normal);
}

.task .go ::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--color-blue);
  transition: var(--trans);


}

.task .go:hover {
  color: #fff;
  background: var(--color-blue);
}

@media screen and (max-width:1200px) {
  main {
    padding: var(--tablet-padding);
  }

}

@media screen and (max-width :992px) {

  main {
    padding: 20px 15px;
    margin-bottom: 60px;
    gap: 20px;
  }

  main h1 {
    font-size: var(--font-big-m);
  }

  .button {
    font-size: var(--font-normal-m);
    padding: 10px 20px;
  }

  .button i {
    font-size: 12px !important;
  }

  .task>img {
    width: 145px;
    height: 107px;
  }

  .task {
    width: 165px !important;
    padding: 10px 15px !important;
    gap: 15px !important;
  }

  .text {
    gap: 2px !important;
  }

  .text h4 {
    font-size: var(--font-small-m) !important;
    width: 86px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .text p {
    font-size: 10px !important;
    width: 86px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .user div>img {
    width: 30px !important;
    height: 30px !important;
  }

  .user div {
    gap: 5px !important;
  }

  .go {
    font-size: var(--font-small-m) !important;
    padding: 8px 0 !important;
    width: 100%;
  }

}
</style>