import { Car } from "@/interfaces";
import Image from "next/image";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div>
      <Image
        src={"/hero.png"}
        alt="hero car"
        width={200}
        height={300}
        className="h-auto"
      />
      <p>{car.model}</p>
    </div>
  );
}
