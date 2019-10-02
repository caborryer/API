const { model, Schema } = require("mongoose");

const users = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  cellphone: { type: Number, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: false, default: true },
  create_at: { type: Date, default: Date.now() }
});

module.exports = model("users", users);
