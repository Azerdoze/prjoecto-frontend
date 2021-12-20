import { Email } from "./emails";

export class User {
    public user_id : number;
    public user_name: string = "";
    public user_email: string = "";
    public user_password: string = "";
    public user_country: string = "";
    public user_city: string = "";
    public is_admin: boolean;
}
