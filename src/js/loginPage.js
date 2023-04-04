import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: 'LogInPage',
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            userStatus: false
        }
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData'])
    },
    methods: {
        home() {
            this.$router.push({
                name: 'homePage'
            })
        },
        loginPage() {
            this.$router.push({
                name: 'loginPage'
            })
        },
        userLogin() {
            axios
                .post('http://localhost:8000/api/user/login', this.userData)
                .then((response) => {
                    if (response.data.token == null) {
                        // console.log('there is no user');
                        this.userStatus = true;
                    } else {
                        this.userData.email = '',
                            this.userData.password = '',
                            this.userStatus = false,
                            this.$store.dispatch('setToken', response.data.token),
                            this.$store.dispatch('setUserData', response.data.user)
                            // console.log('success');
                        this.home();
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}