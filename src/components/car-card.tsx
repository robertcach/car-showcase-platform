import { Car } from "@/interfaces";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div>
      <p>{car.model}</p>
    </div>
  );
}
