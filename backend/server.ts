import express, { Express } from "express";
import cors from "cors";
import { City } from "@full-stack/types";
import { db } from "./firebase";
import path from "path";
// import { cityRouter } from "./city.routes.tsx";
import {getAllCity} from './city.controller';

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/cities', async (req, res) => {
    console.log("GET cities was called");
    try {
      const cities = await getAllCity();
      console.log("Cities are", cities);
      // res.send(drawCitiesSVG(cities));
      res.status(200).send({
        message: `SUCCESS retrieved all city data to the map in FableTown`
      });
    } catch (error) {
      res.status(500).send('Error retrieving cities');
    }
  });

app.get("/", async (req, res) => {
    console.log("GET city was called");
    try {
        return db.collection("Document").get().then((snapshot) => {
            res.json(snapshot.docs);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, hostname, () => {
    console.log("Listening");
});
