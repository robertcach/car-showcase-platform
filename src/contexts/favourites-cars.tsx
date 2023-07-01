"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
import { Car } from "@/interfaces";

const CARS: string = "cars";

interface FavouritesCarsContextProps {
  children: JSX.Element;
}

export interface FavouritesCarsContextValues {
  favouritesCars: Car[];
  setFavouritesCars: (values: Car[]) => void;
  addFavouriteCar: (value: Car) => void;
}

const FavouritesCarsContext = React.createContext(
  {} as FavouritesCarsContextValues
);
export const useFavouritesCarsContext = () => useContext(FavouritesCarsContext);

export const FavouritesCarsContextProvider = ({
  children,
}: FavouritesCarsContextProps) => {
  const [favouritesCars, setFavouritesCars] = useState<Car[]>(
    JSON.parse(localStorage.getItem(CARS) as string) || []
  );

  const carsLocalStorage = localStorage.setItem(
    CARS,
    JSON.stringify(favouritesCars)
  );

  const addFavouriteCar = useCallback(
    (car: Car) => {
      if (favouritesCars.includes(car)) {
        const filterCars = favouritesCars.filter(
          (favouriteCar) => favouriteCar.model !== car.model
        );
        setFavouritesCars(filterCars);
      } else {
        setFavouritesCars([car, ...favouritesCars]);
      }
    },
    [favouritesCars]
  );

  const value = useMemo(
    () => ({
      favouritesCars,
      setFavouritesCars,
      addFavouriteCar,
    }),
    [favouritesCars, setFavouritesCars, addFavouriteCar]
  );

  return (
    <FavouritesCarsContext.Provider value={value}>
      {children}
    </FavouritesCarsContext.Provider>
  );
};
