import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: 'NewDetails',
    data() {
        return {
            postId: 0,
            posts: {},
            viewCount: 0
        }
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData'])
    },
    methods: {
        loadPost(id) {
            axios
                .post('http://localhost:8000/api/postDetails', {
                    postId: id
                })
                .then((response) => {
                    // console.log(response.data.post);
                    if (response.data.post.post_image != null) {
                        response.data.post.post_image =
                            'http://localhost:8000/postImage/' + response.data.post.post_image
                    } else {
                        response.data.post.post_image =
                            'http://localhost:8000/defaultImage/defaultImage.png';
                    }
                    this.posts = response.data.post;
                });
        },
        back() {
            // console.log('hello');
            history.back();
        },
        home() {
            this.$router.push({
                name: 'homePage'
            })
        },
        loginPage() {
            this.$router.push({
                name: 'loginPage'
            })
        }
    },
    mounted() {
        // console.log(this.$route.params.newId);
        // console.log(this.storageUserData);
        let data = {
            user_id: this.storageUserData.id,
            post_id: this.$route.params.newId
        }
        axios
            .post('http://localhost:8000/api/actionLogPost', data)
            .then((response) => {
                this.viewCount = response.data.data.length;
                // console.log(response.data.data.length);
            })

        this.postId = this.$route.params.newId;
        this.loadPost(this.postId);
    }
}