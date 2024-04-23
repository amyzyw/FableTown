import { db } from "./firebase";
import { City, CityWithId } from "../lib/types/index.ts";
import { cityRouter } from "./city.routes";

const cityCollectionRef = db.collection("citys");

// export const getCity = async (name: string) => {
//   const snapshot = await cityCollectionRef.where("owner", "==", email).get();
//   let tasks: TaskWithId[] = [];
//   snapshot.forEach((doc) => {
//     const task = { id: doc.id, ...(doc.data() as Task) };
//     tasks.push(task);
//   });
//   return tasks;
// };

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