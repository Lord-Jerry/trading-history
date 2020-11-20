export interface UserInterface{
    id: number;
    fname: string;
    lname: string;
    email: string;
    password: string;
    active: boolean;
    social: boolean;
    // eslint-disable-next-line camelcase
    social_type: string;
}
