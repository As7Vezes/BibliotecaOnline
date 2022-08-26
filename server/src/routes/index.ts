import { Router } from "express";
import booksRouter from "./books.routes";

const router = Router() 

router.get('/read', booksRouter)

export default router

