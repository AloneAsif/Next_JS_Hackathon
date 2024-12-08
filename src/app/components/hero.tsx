import { Button } from "@/components/ui/button";
import Image from "next/image";
// import ProductDetails from "../product_detail/page";
import Link from "next/link";

export default function Hero() {
  return (
    <>
    
      <div className="bg-[#E5E5E5] py-2 justify-center items-center text-center">
        <h1 className="font-bold text-[15px]">Hello Nike App</h1>
        <p className="text-[11px]">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>
      <Link href="/product_detail">
      <Image
        className="px-10"
        src="/home_page/first.png" // Path relative to the 'public' folder
        alt="Nike App" // Descriptive alt text for the image
        width={1344} // Set width of the image
        height={700} // Set height of the image
      />
      </Link>
     
      <div className="flex justify-center mt-5">
        <div className="text-center flex flex-col w-[500px]">
          <p>First Look</p>
          <h1 className="text-[56px] font-bold">Nike Air Max Pulse</h1>
          <p className="text-[15px]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-5 mb-5">
            <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
              Notify me
            </Button>
            <Button className=" rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
              Shop Air Max
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
