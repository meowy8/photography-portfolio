import Image from "next/image";
import PhotoFrame from "./components/PhotoFrame";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gradient-radial from-[#5E0D06]/90 to-[#030200]">
      <Link href={"/film"} className="group">
        <div className="flex flex-col border-8 border-black">
          <Image
            src="/images/000003.JPG"
            alt="trees"
            width={600}
            height={600}
            className=""
          />
          <div className="flex justify-center items-center">
            <span className="flex text-3xl text-[#C2C04C] font-bold w-full h-full bg-black">
              Film
            </span>
          </div>
        </div>
      </Link>
      <Link href={"/digital"}>
        <div className="flex flex-col border-8 border-black">
          <Image
            src="/images/DSCF7722.jpg"
            alt="trees"
            width={600}
            height={600}
            className=""
          />
        </div>
          <div className="flex justify-center items-center">
            <span className="flex text-3xl text-[#C2C04C] font-bold w-full h-full bg-black">
              Digital
            </span>
          </div>
      </Link>
    </main>
  );
}
