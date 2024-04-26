import { db } from "./firebase";
import { City, CityWithId } from "@full-stack/types";
const cityCollectionRef = db.collection("citys");

export const getACity = async (cityId: string) => {
  return await cityCollectionRef.doc(cityId).get();
};

export const addCity = async (city: City) => {
  const newDoc = cityCollectionRef.doc();
  return await newDoc.set(city);
};

export const deleteCity = async (cityId: string) => {
  return await cityCollectionRef.doc(cityId).delete();
};

export const updateInfo = async (cityId: string, name: string, description: string, x: number, y: number) => {
  return await cityCollectionRef.doc(cityId).update({ name, description, x, y });
}