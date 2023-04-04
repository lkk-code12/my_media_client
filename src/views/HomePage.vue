<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center mt-3">
        <div
          class="col-1 btn btn-sm me-3"
          @click="home()"
          v-if="tokenStatus == false"
        >
          Home
        </div>
        <div
          class="col-1 btn btn-dark btn-sm me-3"
          @click="loginPage()"
          v-if="tokenStatus == false"
        >
          Login
        </div>
        <div
          class="col-1 btn btn-dark btn-sm me-3"
          @click="logoutPage()"
          v-if="tokenStatus == true"
        >
          Logout
        </div>
      </div>
    </div>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-2">
            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        @click="categorySearch('')"
                        >All</a
                      >
                      <a
                        class="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        v-for="(category, index) in categoryLists"
                        :key="index"
                        @click="categorySearch(category.category_title)"
                        >{{ category.category_title }}</a
                      >
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="row pb-5 d-flex">
                  <div class="col-4 offset-7">
                    <input
                      type="text"
                      name=""
                      class="form-control"
                      id=""
                      v-on:keyup.enter="search()"
                      v-model="searchKey"
                    />
                  </div>
                  <div class="col">
                    <i
                      class="fas fa-search special-tag bg-danger p-2 mt-1 text-light"
                      @click="search()"
                    ></i>
                  </div>
                </div>
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                      <span class="d-flex justify-content-center bg-warning py-5 my-5" v-if="tokenStatus == false">
                        <h5>Sorry! You need to <i>Login</i> first.</h5>
                      </span>
                      <span v-if="tokenStatus == true">
                        <div class="row">
                          <div class="col" v-if="postLists.length == 0">
                            <h1 class="py-5 my-5 text-danger text-center">
                              There is no data.
                            </h1>
                          </div>

                          <div
                            class="col-lg-6 col-md-6"
                            v-else
                            v-for="(item, index) in postLists"
                            :key="index"
                          >
                            <div
                              class="single-what-news mb-100"
                              @click="newDetails(item.post_id)"
                            >
                              <div class="what-img">
                                <img :src="item.post_image" alt="" />
                              </div>
                              <div class="what-cap">
                                <span class="color1">{{
                                  item.post_title
                                }}</span>
                                <h4>
                                  <a href="details.html">{{
                                    item.post_description
                                  }}</a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End pagination  -->
  </div>
</template>

<script src="../js/homePage.js"></script>
