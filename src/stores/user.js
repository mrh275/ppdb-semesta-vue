/* eslint-disable no-unused-vars */
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
                    });
                });
        },
        logout() {
            Swal.fire({
                title: 'Logging out...',
                timer: 1500,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then((dismiss) => {
                sessionStorage.removeItem('accessToken');
                this.userLoggedIn = false
                const toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 2000,
                    timerProgressBar: true
                })

                toast.fire({
                    icon: 'success',
                    title: 'User logged out successfully!'
                })
            })
        }
    }
});