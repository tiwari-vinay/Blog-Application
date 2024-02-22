import User from '../model/user.js'


export const signupUSer = async (req, res) => {
  try {
    const { username, email, passowrd } = req.body;

    const newUser = new User({
      username,
      email,
      passowrd,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log("error while saving the user", err);
    res.status(500).json({ message: "internal server error" });
  }
};

export default signupUSer;
