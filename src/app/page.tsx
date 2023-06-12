import CarCard from "@/components/car-card";
import Hero from "@/components/hero";
import SearchBar from "@/components/search-bar";
import { useGetCars } from "@/hooks/getCars";
import { Car } from "@/interfaces";
import Image from "next/image";

export default async function Home() {
  const allCars: Car[] = await useGetCars("Corolla");

  return (
    <main>
      <Hero />
      <SearchBar />
      {allCars.map((car) => (
        <CarCard car={car} />
      ))}
    </main>
  );
}
