import config from "../config/config";
import {Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;
}

const authService = new AuthService();

export default AuthService;