import { defineStore } from "pinia";
import { accountLogin } from "@/service/login";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        name: ''
    }),
    actions: {
        async accountLoginAction(account: any){
            const loginRes = await accountLogin(account);
            this.id = loginRes.data.id;
            this.token = loginRes.data.token;
            this.name = loginRes.data.name;
            localStorage.setItem("token", this.token as string);
        }
    }
})

export default useLoginStore;