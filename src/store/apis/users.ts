import { api } from "./api";


class Users {
    static signIn(data: any) {
        return api.post('/user/sign-in', data);
    }

}

export default Users;
