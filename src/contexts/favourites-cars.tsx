"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
const CARS: string = "cars";

interface FavouritesCarsContextProps {
  children: JSX.Element;
}

export interface FavouritesCarsContextValues {
  favouritesCars: string[];
  setFavouritesCars: (values: string[]) => void;
  addFavouriteCar: (value: string) => void;
}

export const FavouritesCarsContext = React.createContext(
  {} as FavouritesCarsContextValues
);

export const FavouritesCarsContextProvider = ({
  children,
}: FavouritesCarsContextProps) => {
  const [favouritesCars, setFavouritesCars] = useState<string[]>(
    JSON.parse(localStorage.getItem(CARS) as string) || []
  );

  const carsLocalStorage = localStorage.setItem(
    CARS,
    JSON.stringify(favouritesCars)
  );

  const addFavouriteCar = useCallback(
    (carModel: string) => {
      if (favouritesCars.includes(carModel)) {
        const filterCars = favouritesCars.filter(
          (favouriteCar) => favouriteCar !== carModel
        );
        setFavouritesCars(filterCars);
      } else {
        setFavouritesCars([carModel, ...favouritesCars]);
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
