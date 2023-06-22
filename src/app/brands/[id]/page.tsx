import { useGetBrand } from "@/hooks/getBrand";
import { Car } from "@/interfaces";
import Image from "next/image";

export default async function CarBrand({ params }: any) {
  const { id } = params;
  const brandCars: Car[] = await useGetBrand(id);

  return (
    <div className="flex flex-wrap gap-20">
      {brandCars.map((car) => (
        <article>
          <Image
            src={"/hero.png"}
            alt="hero car"
            width={200}
            height={300}
            className="h-auto"
          />
          <p>{car.model}</p>
          <p>{car.year}</p>
        </article>
      ))}
    </div>
  );
}
