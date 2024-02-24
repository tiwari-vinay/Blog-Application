import User from '../model/user.js'


export const signupUSer = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log("error while saving the user", err);
    res.status(500).json({ message: "internal server error" });
  }
};

export default signupUSer;
