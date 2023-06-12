"use client";

import CarCard from "@/components/car-card";
import Hero from "@/components/hero";
import SearchBar from "@/components/search-bar";
import { CARS_BRANDS } from "@/constants";
import { useGetCars } from "@/hooks/getCars";
import { Car, CarBrand } from "@/interfaces";
import { useState } from "react";

export default async function Home() {
  const [selectedBrand, setSelectedBrand] = useState<CarBrand>(CARS_BRANDS[0]);
  const allCars: Car[] = await useGetCars(selectedBrand.name.toLowerCase());

  console.log(selectedBrand);

  return (
    <main>
      <Hero />
      <SearchBar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      {allCars.map((car) => (
        <CarCard car={car} />
      ))}
    </main>
  );
}
