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
      <div className="flex flex-wrap gap-12 px-4 mx-auto max-w-7xl">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <p>There is an error in request</p>
        ) : !cars.length ? (
          <p>There is no data</p>
        ) : (
          <>
            {cars?.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
