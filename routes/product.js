const {
	getProducts,
	createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    getProductsByCategory,
} = require("../controllers/product");

const router = require("express").Router();

router.get("/", getProducts);
router.get('/:categoryId/category', getProductsByCategory);
router.get("/:productId", getProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProduct);
router.post("/", createProduct);

module.exports = router;