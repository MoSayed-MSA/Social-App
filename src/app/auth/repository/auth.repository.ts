import { AbstractRepo } from "../../../lib/db/abstract.reop.js";
import { IUser } from "../../../lib/interface/user.interface.js";
import User from "../model/auth.model.js";

class AuthRepository extends AbstractRepo <IUser>{

    constructor() {
        super(User);
        
    }
    
}

export default new AuthRepository();