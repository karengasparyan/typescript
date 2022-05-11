export const SIGN_IN_REQUEST: string = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS: string = 'SIGN_IN_SUCCESS';

export function signIn(payload: object, cb?: (arg: any) => any ) {
    return {
        type: SIGN_IN_REQUEST,
        payload,
        cb,
    };
}