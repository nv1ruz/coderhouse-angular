export interface IUserLoginResponse {
    ok: boolean;
    message: string;
    data?: IUser;
}

export interface IUserRegisterResponse {
    ok: boolean;
    message: string;
    data?: {
        email: string;
        name: string;
        accessToken: string;
    };
}

export interface IUserRenewTokenResponse {
    ok: boolean;
    message: string;
    data?: IUser;
}

export interface IUser {
    id?: string;
    email: string;
    name: string;
    address: string;
    phone: string;
    image: string;
    isAdmin: boolean;
    accessToken?: string;
}
