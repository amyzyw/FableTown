import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { City } from "@full-stack/types";
// import { cityRouter } from "./city.routes.tsx";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
    console.log("GET city was called");
    try {
        const response = await fetch(
            "https://FableTown.fly.dev/api"
        );
        const data = (await response.json()) as City;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, hostname, () => {
    console.log("Listening");
});
