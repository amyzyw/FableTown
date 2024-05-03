// Shared types across both frontend and backend!

export type City = {
    name: string;
    description: string;
    x: number;
    y: number;
    size: number;
    type: string;
    color: string;
  };
  
  export type CityWithId = City & {
    cityId: string;
  };