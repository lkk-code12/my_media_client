<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center mt-3">
        <div class="col-1 btn btn-sm me-3" @click="home()">Home</div>
        <div class="col-1 btn btn-dark btn-sm me-3" @click="loginPage()">
          Login
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <span
          class="d-flex justify-content-center pt-5 text-danger"
          v-if="userStatus == true"
          >Email and password do not match!</span
        >
      </div>
      <div class="row justify-content-center py-5">
        <div class="col-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model="userData.email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label"
              >Email address</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="**********************"
              v-model="userData.password"
            />
          </div>
          <button type="button" class="btn btn-danger" @click="userLogin()">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/loginPage.js"></script>
