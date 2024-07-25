const bcryptjs = require("bcryptjs");
const { authService } = require("../services");

const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, password, email } = req.body;

    const userDetail = await authService.isEmailTaken(email);
    // console.log(userDetail);

    if (userDetail) {
      return res.status(400).json({
        message: "Already Exist User",
      });
    }

    /* decrypt password via bcryptjs & create obj payload */
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      username,
      email,
      password: hashPassword,
    };

    authService.createUser(payload);

    return res.status(200).json({
      message: "User Created Successfully",
      data: payload,
      success: true,
    });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

module.exports = { signup };
