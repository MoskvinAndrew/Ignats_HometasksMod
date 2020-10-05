import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',

});

export const requestAPI = {
    makeRequest(success:boolean) {
        const promise = instance.post('auth/test',{success});
        return promise;
    },
}