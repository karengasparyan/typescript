import {api} from "./api";
import {AxiosResponse} from "axios";

class Users {
    static signIn(data: object) {
        return api.post<object, AxiosResponse<object>, any>('/user/sign-in', data);
    }
}

export default Users;
