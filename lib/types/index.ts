// Shared types across both frontend and backend!

export type City = {
    name: string;
    description: string;
    x: number;
    y: number;
  };
  
  export type CityWithId = City & {
    cityId: string;
  };