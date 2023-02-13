import mybearRequest from "..";

export function accountLogin(account: any){
    return mybearRequest.post({
        url: '/login',
        data: account
    })
}