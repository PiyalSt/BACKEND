export const createProduct = async (req, res) => {
  try {
    const { name, price, brand } = req.body

    res.status(201).json({
      message: "Product create successfully!",
      product: {
        name,
        price,
        brand
      }
    })
  } catch (error) {}
};

export const searchProduct = async (req, res) => {
  try {
    const { category } = req.query; // Search with Query

    res.status(200).json({
      message: "Product fetched",
      category,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
