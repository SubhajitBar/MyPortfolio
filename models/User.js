import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        require: [true, "Please Enter Email"],
    },
    password: {
        type: String,
        require: [true, "Please Enter Password"],
        select: false
    },

    timeline: [
        {
            title: String,
            description: String,
            date: Date
        },
    ],

    skills: {
        image1: {
            public_id: String,
            url: String
        },
        image2: {
            public_id: String,
            url: String
        },
        image3: {
            public_id: String,
            url: String
        },
        image4: {
            public_id: String,
            url: String
        },
        image5: {
            public_id: String,
            url: String
        },
        image6: {
            public_id: String,
            url: String
        }
    },

    youtube: [
        {
            url: String,
            title: String,
            image: {
                public_id: String,
                url: String
            },
        },
    ],

    about: {
        name: String,
        title: String,
        subtitle: String,
        description: String,
        quote: String,
        avatar: {
            public_id: String,
            url: String
        },
    },

    projects: [
        {
            url: String,
            title: String,
            description: String,
            techStack: String,
            image:{
                public_id: String,
                url: String,
            }
        },
    ],

});

export const User = mongoose.model("Users", schema);