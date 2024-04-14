import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&psig=AOvVaw1viIlm_glnnk3MqyDrPk2e&ust=1713190516717000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiPppTywYUDFQAAAAAdAAAAABAE",
    },
    },
    {timestamps:true}
);

const User = mongoose.model('User', userSchema);

export default User;