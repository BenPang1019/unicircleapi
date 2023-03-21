import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  addGuide,
  deleteGuide,
  getGuide,
  getGuides,
  updateGuide,
  login,
  logout
} from "../controllers/product.js";

const router = express.Router();

router.get("/getProducts", getProducts);
router.get("/getProduct/:id", getProduct);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

router.get("/getGuides", getGuides);
router.get("/getGuide/:id", getGuide);
router.post("/addGuide", addGuide);
router.delete("/deleteGuide/:id", deleteGuide);
router.put("/updateGuide/:id", updateGuide);

router.post("/login", login);
router.post("/logout", logout);


export default router;