import { Router } from "express";
import * as generoController from "../controllers/generoController.js";

const router = Router();

router.get("/", generoController.listarTodos);
router.get("/:id", generoController.listarUm);
router.post("/", generoController.criar);
router.put("/:id", generoController.atualizar);
router.delete("/:id", generoController.deletar);

export default router;
