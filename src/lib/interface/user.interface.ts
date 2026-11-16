import { Gender, Provider } from "../enums/enum.js";

export interface IUser {
    name : string;
    email : string;
    password : string;
    gender : Gender
    Provider : Provider
}
