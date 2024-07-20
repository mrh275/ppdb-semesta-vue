import { defineStore } from "pinia";
import axios from "axios";

export default defineStore('register', {
    state: () => ({
        noRegister: "",
        currentBiodata: null,
        currentDataOrangTua: null,
        storedDataOrangTua: "",
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
        },
        async storeDataOrangTua(values) {
            const url = "/data-orangtua"
            const data = values
            await axios
                .post(url, data, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }).then((response) => {
                    this.storedDataOrangTua = response.data;
                });
        },
        async getCurrentBiodata(values) {
            const url = "/active-pendaftar/" + values;
            let response = "";
            await axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }).then((response) => {
                    this.currentBiodata = response.data.data[0];
                });
            return response;
        }
    }
});