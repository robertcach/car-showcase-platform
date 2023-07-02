import { FavouritesCarsContext } from "@/contexts/favourites-cars";
import { useContext } from "react";

export const useFavouritesCarsContext = () => {
  const context = useContext(FavouritesCarsContext);

  if (context === undefined) {
    throw new Error("There is no context");
  }

  return context;
};
