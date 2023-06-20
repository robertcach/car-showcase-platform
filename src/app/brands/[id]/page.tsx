import { useGetBrand } from "@/hooks/getBrand";
import { Car } from "@/interfaces";

export default async function CarBrand({ params }: any) {
  const { id } = params;
  const brandCars: Car[] = await useGetBrand(id);

  return (
    <div>
      <ul>
        {brandCars.map((car) => (
          <p>{car.model}</p>
        ))}
      </ul>
    </div>
  );
}
