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
  const { data: cars, loading, error } = useGetCars(selectedBrand.name);

  return (
    <main>
      <Hero />
      <SearchBar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        "There is an error in request"
      ) : !cars.length ? (
        "There is no data"
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
