const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    mobileNumber:{type: Number,
        required:true,
         min:1000000000,
         max:9999999999
    },
    adhar:{type: Number,
        required:true,
        min:1000000000,
        max:9999999999
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
