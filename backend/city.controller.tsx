import { db } from "./firebase";
import { City, CityWithId } from "../lib/types/index.ts";
import { cityRouter } from "./city.routes";

const cityCollectionRef = db.collection("citys");

export const getAllCity = async () => {
  const snapshot = await cityCollectionRef.get();
  let cities: any[] = [];
  snapshot.forEach(doc => {
    const city = { id: doc.id, ...doc.data() };
    cities.push(city);
  });
  return cities;
};

export const addCity = async (city: City) => {
  const newDoc = cityCollectionRef.doc();
  return await newDoc.set(city);
};

export const deleteCity = async (cityId: string) => {
  return await cityCollectionRef.doc(cityId).delete();
};

export const updateInfo = async (cityId: string, name: string, description: string) => {
  return await cityCollectionRef.doc(cityId).update({ name, description });
}