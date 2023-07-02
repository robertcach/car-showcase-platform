"use client";

import { useFavouritesCarsContext } from "@/hooks/useFavouritesCarsContext";
import { Car } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { addFavouriteCar, favouritesCars } = useFavouritesCarsContext();

  return (
    <div>
      <Link
        href={{ pathname: `/cars/${car.model}`, query: { brand: car.make } }}
      >
        <Image
          src={"/hero.png"}
          alt="hero car"
          width={200}
          height={300}
          className="h-auto"
        />
      </Link>

      <p>{car.model}</p>
      <button
        className={`p-2 rounded-xl ${
          favouritesCars.includes(car.model)
            ? "bg-red-500 text-black"
            : "text-white bg-black"
        }`}
        onClick={() => addFavouriteCar(car.model)}
      >
        Favourite
      </button>
    </div>
  );
}
