
import express from "express";

import {
    createMovie,
    readMovies,
    readMovieById,
    updateMovieById,
    deleteMovieById
} from "./movieController.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/", readMovies);
router.get("/:id", readMovieById);
router.put("/:id", updateMovieById);
router.delete("/:id", deleteMovieById);

export default router;
