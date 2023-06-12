export function useGetCars(brand: string) {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${brand}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  return fetch(url, options).then((res) => res.json());
}
