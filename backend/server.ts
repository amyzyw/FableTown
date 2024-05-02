import express, { Express } from "express";
import cors from "cors";
import { City, CityWithId } from "@full-stack/types";
import { db } from "./firebase";
import path from "path";
import {getACity, addCity, deleteCity, updateInfo} from './city.controller';

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

// GET ALL city
app.get("/", async (req, res) => {
  try {
      const snapshot = await db.collection("CityData").get();
      const cities = snapshot.docs.map(doc => ({
          cityId: doc.id,
          ...doc.data()
      }));
      res.json(cities);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
  }
});

// GET a specific city according to ID
app.get('/:cityId', async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const city = await getACity(cityId);
    res.json(city);
    // res.status(200).send({
    //   city
    // });
  } catch (error) {
    res.status(500).send('Error retrieving cities');
  }
});

// ADD a city
app.post("/addCity", async (req, res) => {
  try {
    const { name, description, x, y } = req.body;
    const city: City = { name, description, x, y };
    await addCity(city);

    res.status(200).send({
      message: `SUCCESS added ${city} to the map in FableTown`
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

// DELETE a city
app.delete("/:cityId", async (req, res) => {
  try {
    const cityId = req.params.cityId;
    await deleteCity(cityId);

    res.status(200).send({
      message: `SUCCESS deleted city with id: ${cityId} from the map in FableTown`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

// UPDATE a city info
app.put("/:cityId", async (req, res) => {
  try {
    const { name, description, x, y} = req.body;
    const cityId = req.params.cityId;

    await updateInfo(cityId, name, description, x, y);

    res.status(200).send({
      message: `SUCCESS updated city info with id: ${cityId} from the map in FableTown`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

app.listen(port, hostname, () => {
    console.log("Listening");
});
