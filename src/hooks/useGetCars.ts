import { Car } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetCars = (brand: string) => {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

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
        setLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching Cars data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (brand !== "") {
      fetchCarsBrandsData();
    }
  }, [brand]);

  return { data, loading, error };
};
