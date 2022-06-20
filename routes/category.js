const {
	getCategory,
	createCategory,
    getCategories,
    deleteCategory,
    updateCategory,
} = require("../controllers/category");

const router = require("express").Router();

router.get("/", getCategories);
router.get('/:categoryId', getCategory)
router.delete("/:categoryId", deleteCategory);
router.put("/:categoryId", updateCategory);
router.post("/", createCategory);

module.exports = router;