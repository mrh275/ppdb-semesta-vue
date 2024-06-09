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
                }).then(() => {
                    sessionStorage.setItem("noRegister", "PPDB-2425-32498");
                    this.noRegister = "PPDB-2425-32498"
                });
        }
    }
});