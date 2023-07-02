export function useGetSingleCar(id: string, brand: string) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CARS_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  return fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${id}&make=${brand}`,
    options
  ).then((res) => res.json());
}
