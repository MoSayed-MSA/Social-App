import { Schema, model } from "mongoose";
import { IUser } from "../../../lib/interface/user.interface.js";
import { Gender, Provider } from "../../../lib/enums/enum.js";



const userSchema = new Schema<IUser>({
    name : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    password : { type: String, 
        required: function (this) {
            return this.Provider === Provider.LOCAL;
        } 
    },
    gender : { type: String, enum: Gender, required: true },
    Provider : { type: String, enum: Provider, required: true }
}, { timestamps: true });

const User = model<IUser>("User", userSchema);

export default User;