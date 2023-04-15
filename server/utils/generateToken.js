import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "shopping-cart", {
    expiresIn: "30d",
  });
};

export default generateToken;
