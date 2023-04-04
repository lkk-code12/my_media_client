<template>
  <div>
    <main>
      <!-- About US Start -->
      <div class="about-area">
        <div class="container">
          <!-- Hot Aimated News Tittle-->
          <div class="container">
            <div class="row d-flex justify-content-center mt-3">
              <div class="col-1 btn btn-sm me-3" @click="home()">Home</div>
              <div class="col-1 btn btn-dark btn-sm me-3" @click="loginPage()">
                Login
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <!-- Trending Tittle -->
              <div class="about-right mb-90">
                <div class="about-img">
                  <img
                    :src="posts.post_image"
                    alt=""
                    style="width: 300px; height: 400px"
                  />
                </div>
                <div class="section-tittle mb-30 pt-30">
                  <h1>{{ posts.post_title }}</h1>
                  <p>{{ posts.post_description }}</p>
                </div>
                <div class="social-share pt-30">
                  <div class="section-tittle">
                    <div class="col-1 text-danger">
                      <i class="fa-solid fa-eye mx-2"></i>
                      <span>{{ viewCount }}</span>
                    </div>
                    <div class="col-1 text-danger">
                      <i class="fa-solid fa-eye mx-2"></i>
                      <span>5</span>
                    </div>
                    <div class="col-1 text-danger">
                      <i class="fa-solid fa-eye mx-2"></i>
                      <span>5</span>
                    </div>
                    <div class="col-1 text-danger">
                      <i class="fa-solid fa-eye mx-2"></i>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- From -->
              <div class="row">
                <div class="col-lg-8">
                  <div class="form-group mb-5">
                    <button
                      type="submit"
                      class="button button-contactForm boxed-btn"
                      @click="back()"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <!-- Section Tittle -->
              <div class="section-tittle">
                <h3>Follow Us</h3>
              </div>
              <!-- Flow Socail -->
              <div class="single-follow mb-45">
                <div class="single-box">
                  <div class="follow-us d-flex align-items-center">
                    <div class="follow-social">
                      <a href="#"
                        ><img src="../assets/img/news/icon-fb.png" alt=""
                      /></a>
                    </div>
                    <div class="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div class="follow-us d-flex align-items-center">
                    <div class="follow-social">
                      <a href="#"
                        ><img src="../assets/img/news/icon-tw.png" alt=""
                      /></a>
                    </div>
                    <div class="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div class="follow-us d-flex align-items-center">
                    <div class="follow-social">
                      <a href="#"
                        ><img src="../assets/img/news/icon-ins.png" alt=""
                      /></a>
                    </div>
                    <div class="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div class="follow-us d-flex align-items-center">
                    <div class="follow-social">
                      <a href="#"
                        ><img src="../assets/img/news/icon-yo.png" alt=""
                      /></a>
                    </div>
                    <div class="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- New Poster -->
              <div class="news-poster d-none d-lg-block mb-5">
                <img src="../assets/img/news/news_card.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About US End -->
    </main>
  </div>
</template>

<script src="../js/newDetails.js"></script>
