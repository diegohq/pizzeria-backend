import { Router } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();


// Users
router.post("/users", new CreateUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.post("/session", new AuthUserController().handle);

// Categories
router.post("/categories", isAuthenticated, new CreateCategoryController().handle)

export { router };
