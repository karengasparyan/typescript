import { api } from "./api";


class Users {
    static signIn(data: object) {
        return api.post<object>('/user/sign-in', data);
    }
}

export default Users;
