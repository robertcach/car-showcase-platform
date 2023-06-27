import { Car } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
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
    </div>
  );
}
