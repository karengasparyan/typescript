import axios from 'axios';
// import Account from '../../helpers/Account';

const baseURL = 'https://timeless.brainfors.am/api/';

export const api = axios.create({
  baseURL,
});
//
// api.interceptors.request.use((config: any) => {
//   if (!config.headers.authorization) {
//     config.headers['x-authorization'] = Account.getToken();
//   }
//   return config;
// }, (e) => Promise.reject(e));
//
// api.interceptors.response.use((r : any) => r, (e) => {
//   if (e.response.status === 401) {
//     Account.delete();
//     window.location.href = '/';
//   }
//   return Promise.reject(e);
// });


