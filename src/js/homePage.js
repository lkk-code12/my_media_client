import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "HomePage",
    data() {
        return {
            postLists: {},
            categoryLists: {},
            searchKey: "",
            tokenStatus: false,
        };
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        getAllPosts() {
            axios.get("http://localhost:8000/api/allPostList").then((response) => {
                this.postLists = response.data.post;
                // console.log(response.data.post);

                for (let i = 0; i < response.data.post.length; i++) {
                    if (response.data.post[i].post_image != null) {
                        response.data.post[i].post_image =
                            "http://localhost:8000/postImage/" +
                            response.data.post[i].post_image;
                    } else {
                        response.data.post[i].post_image =
                            "http://localhost:8000/defaultImage/defaultImage.png";
                    }
                }
                this.postLists = response.data.post;
            });
        },
        getAllCategories() {
            axios
                .get("http://localhost:8000/api/allCategoryList")
                .then((response) => {
                    this.categoryLists = response.data.category;
                });
        },
        search() {
            // console.log(this.searchKey);
            let searchKey = {
                searchData: this.searchKey,
            };
            // console.log(searchKey);
            axios
                .post("http://localhost:8000/api/postSearch", searchKey)
                .then((response) => {
                    this.postLists = response.data.searchResult;

                    for (let i = 0; i < response.data.searchResult.length; i++) {
                        if (response.data.searchResult[i].post_image != null) {
                            response.data.searchResult[i].post_image =
                                "http://localhost:8000/postImage/" +
                                response.data.searchResult[i].post_image;
                        } else {
                            response.data.searchResult[i].post_image =
                                "http://localhost:8000/defaultImage/defaultImage.png";
                        }
                    }
                    this.postLists = response.data.searchResult;
                });
        },
        categorySearch(data) {
            axios
                .post("http://localhost:8000/api/categorySearch", {
                    searchKey: data,
                })
                .then((response) => {
                    // console.log(response.data.result);
                    for (let i = 0; i < response.data.result.length; i++) {
                        if (response.data.result[i].post_image != null) {
                            response.data.result[i].post_image =
                                "http://localhost:8000/postImage/" +
                                response.data.result[i].post_image;
                        } else {
                            response.data.result[i].post_image =
                                "http://localhost:8000/defaultImage/defaultImage.png";
                        }
                    }
                    this.postLists = response.data.result;
                })
                .catch((error) => console.log(error));
        },
        newDetails(id) {
            // console.log(id);
            this.$router.push({
                name: "newDetails",
                params: {
                    newId: id,
                },
            });
        },
        home() {
            this.$router.push({
                name: "homePage",
            });
        },
        loginPage() {
            this.$router.push({
                name: "loginPage",
            });
        },
        logoutPage() {
            this.$store.dispatch('setToken', ''),
                this.loginPage()
        },
        checkToken() {
            if (
                this.storageToken != null &&
                this.storageToken != undefined &&
                this.storageToken != ''
            ) {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        },
    },
    mounted() {
        // console.log(this.storageToken);
        this.checkToken();
        this.getAllPosts();
        this.getAllCategories();
    },
};