// create product
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    res.status(201).json({
      message: "User create successfully!",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  try {
    res.status(200).json({
      message: "All Users",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Search with Id

    res.status(200).json({
      message: "User fetched successfully!",
      userId: id, // userId
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
