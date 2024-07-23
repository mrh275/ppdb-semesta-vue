import { defineStore } from "pinia";
import axios from "axios";

export default defineStore('register', {
    state: () => ({
        noRegister: "",
        currentBiodata: null,
        currentDataOrangTua: null,
        currentDataPeriodik: null,
        currentDataKesejahteraan: null,
        currentAsalSekolah: null,
        storedDataOrangTua: "",
        currentStatusRegister: "biodata",
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
                    if (!sessionStorage.getItem("noRegister")) {
                        sessionStorage.setItem("noRegister", response.data.noreg_ppdb);
                    }
                    sessionStorage.setItem("currentStatusRegister", "orangtua");
                    this.noRegister = response.data.noreg_ppdb;
                    // this.currentStatusRegister = "orangtua";
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
                    sessionStorage.setItem("currentStatusRegister", "periodik");
                    this.storedDataOrangTua = response.data;
                });
        },
        async storeDataPeriodik(values) {
            const url = "/data-periodik"
            const data = values
            await axios
                .post(url, data, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }).then((response) => {
                    sessionStorage.setItem("currentStatusRegister", "upload-files");
                    this.storedDataPeriodik = response.data;
                });
        },
        async resetRegister() {
            sessionStorage.removeItem("noRegister");
            sessionStorage.removeItem("currentStatusRegister");
            this.noRegister = "";
            this.currentBiodata = null;
            this.currentDataOrangTua = null;
            this.currentDataPeriodik = null;
            this.currentDataKesejahteraan = null;
            this.currentAsalSekolah = null;
            this.storedDataOrangTua = "";
            this.currentStatusRegister = "biodata";
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
                    this.currentDataOrangTua = response.data.data[0].data_orang_tua[0] ? response.data.data[0].data_orang_tua[0] : null;
                    this.currentDataPeriodik = response.data.data[0].data_periodik[0] ? response.data.data[0].data_periodik[0] : null;
                    this.currentDataKesejahteraan = response.data.data[0].data_kesejahteraan[0] ? response.data.data[0].data_kesejahteraan[0] : null;
                });
            return response;
        },
        async getAsalSekolah(values) {
            const url = "/asal-sekolah/" + values;
            let response = "";
            await axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                }).then((response) => {
                    this.currentAsalSekolah = response.data.data[0];
                });
            return response;
        }
    }
});