import { Gender } from "../../../lib/enums/enum.js";

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
  gender?: Gender;
}

export interface LoginDto {
  email: string;
  password: string;
}
