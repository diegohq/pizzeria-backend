import { Router } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from "./config/multer";
import multer from "multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Users
router.post("/users", new CreateUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.post("/session", new AuthUserController().handle);

// Categories
router.get(
  "/categories",
  isAuthenticated,
  new ListCategoriesController().handle
);
router.post(
  "/categories",
  isAuthenticated,
  new CreateCategoryController().handle
);

// Products
router.post(
  "/products",
  isAuthenticated,
  upload.single("banner"),
  new CreateProductController().handle
);
router.get(
  "/products",
  isAuthenticated,
  new ListByCategoryController().handle
);

export { router };
