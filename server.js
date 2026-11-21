
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import movieRoutes from "./movieRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "MVC Movies API is running!",
        endpoints: {
            getAllMovies: "GET /api/v1/movies",
            getMovieById: "GET /api/v1/movies/:id",
            createMovie: "POST /api/v1/movies",
            updateMovie: "PUT /api/v1/movies/:id",
            deleteMovie: "DELETE /api/v1/movies/:id"
        }
    });
});

connectDB(process.env.MONGO_URI);

app.use("/api/v1/movies", movieRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route Not Found" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
