import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).limit(req.query._end);

    console.log(users);

    res.status(200).json({ msg: 'success', data: users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(200).json({ msg: 'success', data: userExists });

    const newUser = await User.create({
      name,
      email,
      avatar,
    });

    res.status(200).json({ msg: 'success', data: newUser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUserInfoByID = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoByID };
