import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function RainuresPAR() {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="self-center w-4/5 py-16">
        <Image src="/static/images/acopar/wall.jpg" width="1024" height="389" />
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PA R001
        </h1>
        <Image
          src="/static/images/acopar/PAR001.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          RAINURE: 14/2 <br /> TROU: 10mm <br /> PASSAGE: 16mm <br />
          SURFACE PERFORÉE: 7% <br />
          ÉPAISSEUR: 16mm
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">PAR002</h1>
        <Image
          src="/static/images/acopar/PAR002.jpg
        "
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          RAINURE: 13/3 <br /> TROU: 10mm <br /> PASSAGE: 16mm <br />
          SURFACE PERFORÉE: 12% <br />
          ÉPAISSEUR: 16mm
        </p>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
