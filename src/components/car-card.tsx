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
        width={500}
        height={500}
        className="w-auto h-auto"
      />
      <p>{car.model}</p>
    </div>
  );
}
