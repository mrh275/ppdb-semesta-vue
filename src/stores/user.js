import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export default defineStore('user', {
    state: () => ({
        userLoggedIn: false,
    }),
    actions: {
        async login(values) {
            const url = "/login";
            const data = {
                username: values.username,
                password: values.password,
            };
            await axios
                .post(url, data, {
                    headers: {
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    sessionStorage.setItem("accessToken", response.data.accessToken);
                    Swal.fire({
                        title: "Logging in...",
                        timer: 2000,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                        // eslint-disable-next-line no-unused-vars
                    }).then((dismiss) => {
                        this.userLoggedIn = true;
                        document.querySelector("#login-form").classList.add("invisible");
                        document.querySelector("#login-form").classList.add("opacity-0");
                        window.location.reload()
                        // const Toast = Swal.mixin({
                        //     toast: true,
                        //     position: 'top-end',
                        //     showConfirmButton: false,
                        //     showCloseButton: true,
                        //     timer: 3000,
                        //     timerProgressBar: true,
                        // })
                        // Toast.fire({
                        //     icon: 'success',
                        //     title: response.data.message
                        // })
                    });
                });
        }
    }
});