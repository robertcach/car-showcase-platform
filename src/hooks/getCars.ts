import { CARS_BRANDS } from "@/constants";
import { Car, CarBrand } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetCars = (brand: string) => {
  const [error, setError] = useState<boolean | null>(null);
  const [carsBrands, setCarsBrands] = useState<Car[]>([]);

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${brand}&limit=20`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchCarsBrandsData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setError(false);
        setCarsBrands(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching Pokemon data:", error);
      }
    };

    if (brand !== "") {
      fetchCarsBrandsData();
    }
  }, [brand]);

  return { cars: carsBrands, isLoading: !carsBrands.length && !error };
};
