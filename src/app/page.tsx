"use client";

import CarCard from "@/components/car-card";
import Hero from "@/components/hero";
import SearchBar from "@/components/search-bar";
import { CARS_BRANDS } from "@/constants";
import { useGetCars } from "@/hooks/getCars";

import { CarBrand } from "@/interfaces";
import { useState } from "react";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<CarBrand>(CARS_BRANDS[0]);
  const { cars, isLoading } = useGetCars(selectedBrand.name);

  return (
    <main>
      <Hero />
      <SearchBar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex gap-10 py-10 bg-white">
          {cars?.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>
      )}
    </main>
  );
}
