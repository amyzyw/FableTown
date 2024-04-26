import express, { Router } from "express";

import {
  getAllCity,
  addCity,
  deleteCity,
  updateInfo,
} from "./city.controller";

import { City } from "@full-stack/types";

const cityRouter: Router = express.Router();

// cityRouter.post("/getCity", async (req, res) => {
//   try {
//     const email: string = req.body.email;
//     let tasks = await getCity(email);

//     res.status(200).send({
//       message: `SUCCESS retrieved ${city} from the map in FableTown`,
//       data: tasks,
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: `ERROR: an error occurred: ${err}`,
//     });
//   }
// });

cityRouter.get('/cities', async (req, res) => {
  try {
    const cities = await getAllCity();
    // res.send(drawCitiesSVG(cities));
    res.status(200).send({
      message: `SUCCESS retrieved all city data to the map in FableTown`
    });
  } catch (error) {
    res.status(500).send('Error retrieving cities');
  }
});

cityRouter.post("/addCity", async (req, res) => {
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

cityRouter.delete("/:cityId", async (req, res) => {
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

cityRouter.put("/:cityId", async (req, res) => {
  try {
    const { name, description } = req.body;
    const cityId = req.params.cityId;

    await updateInfo(cityId, name, description);

    res.status(200).send({
      message: `SUCCESS updated city info with id: ${cityId} from the map in FableTown`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

export { cityRouter };