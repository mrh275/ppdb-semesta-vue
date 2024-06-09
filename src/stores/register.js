import { defineStore } from "pinia";
import axios from "axios";

export default defineStore('register', {
    state: () => ({
        noRegister: ""
    }),
    actions: {
        async storeBiodata(values) {
            const url = "/biodata";
            const data = values
            await axios
                .post(url, data, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }).then((response) => {
                    sessionStorage.setItem("noRegister", response.data.noreg_ppdb);
                    this.noRegister = response.data.noreg_ppdb;
                });
        }
    }
});