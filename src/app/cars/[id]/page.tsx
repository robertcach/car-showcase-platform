"use client";
import { useGetSingleCar } from "@/hooks/usegetSingleCar";
import { Car } from "@/interfaces";
import { useSearchParams } from "next/navigation";

export default async function Car({ params }: any) {
  const { id } = params;
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");

  const car: Car[] = await useGetSingleCar(id, brand as string);

  return (
    <div>
      <p>{car[0].model}</p>
      <p>{car[0].class}</p>
    </div>
  );
}
