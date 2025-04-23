import { User } from "./user.interface";

export interface LoginResponse {
	message: string;
	usuario: User;
}