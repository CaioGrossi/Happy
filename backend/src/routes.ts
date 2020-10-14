import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesControlles";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);

export default routes;
