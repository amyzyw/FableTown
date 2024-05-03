import { db } from "./firebase";
import { City, CityWithId } from "@full-stack/types";
const cityCollectionRef = db.collection("CityData");

export const getACity = async (cityId: string) => {
  const snapshot = await cityCollectionRef.doc(cityId).get();
  return snapshot.data();
};

export const addCity = async (city: City) => {
  const newDoc = cityCollectionRef.doc();
  return await newDoc.set(city);
};

export const deleteCity = async (cityId: string) => {
  return await cityCollectionRef.doc(cityId).delete();
};

export const updateInfo = async (cityId: string, name: string, description: string, x: number, y: number, size: number, type: string) => {
  return await cityCollectionRef.doc(cityId).update({ name, description, x, y, size, type});
}