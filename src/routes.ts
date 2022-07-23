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
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

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
router.get("/products", isAuthenticated, new ListByCategoryController().handle);

// Orders
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get("/orders/:orderId", isAuthenticated, new DetailOrderController().handle);
router.post("/orders", isAuthenticated, new CreateOrderController().handle);
router.delete(
  "/orders/:orderId",
  isAuthenticated,
  new RemoveOrderController().handle
);
router.put("/orders/:orderId/send", isAuthenticated, new SendOrderController().handle);
router.put("/orders/:orderId/finish", isAuthenticated, new FinishOrderController().handle);

router.post(
  "/orders/:orderId",
  isAuthenticated,
  new AddItemController().handle
);
router.delete(
  "/orders/:orderId/:itemId",
  isAuthenticated,
  new RemoveItemController().handle
);

export { router };
