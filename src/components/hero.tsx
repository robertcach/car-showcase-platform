import Image from "next/image";
import CustomButton from "./custom-button";

export default function Hero() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Find, book, or rent a car - quickly and easily
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Streamline your car rental experience with our effortless booking
              process.
            </p>

            <CustomButton title="View cars" href="#" />
          </div>

          <div>
            <Image
              src={"/hero.png"}
              alt="hero car"
              width={700}
              height={500}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
