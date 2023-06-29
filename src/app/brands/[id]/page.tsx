import NotFoundComponent from "@/components/not-found-component";
import { useGetBrand } from "@/hooks/getBrand";
import { Car } from "@/interfaces";
import Image from "next/image";
import { Suspense } from "react";

export default async function CarBrand({ params }: any) {
  const { id } = params;
  const brandCars: Car[] = await useGetBrand(id);

  if (!brandCars.length) return <NotFoundComponent />;

  return (
    <div className="flex flex-wrap gap-20">
      <Suspense
        fallback={
          <p className="text-1xl">Loading while get data from API request...</p>
        }
      >
        {brandCars.map((car) => (
          <article>
            <Image
              src={"https://picsum.photos/900/900"}
              alt="hero car"
              width={400}
              height={400}
              className="h-auto"
            />
            <p>{car.model}</p>
            <p>{car.year}</p>
          </article>
        ))}
      </Suspense>
    </div>
  );
}
