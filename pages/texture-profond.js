import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function TextureProf() {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="w-full max-w-md pt-16 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD17 ARIEL
        </h1>
        <Image
          src="/static/images/textureprof/PD17ARIEL.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture souple qui représente des images stellaires.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD18 JUPITER
        </h1>
        <Image
          src="/static/images/textureprof/PD18JUPITER.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture souple illustrant les anneaux de Jupiter.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD19 GALAXIA
        </h1>
        <Image
          src="/static/images/textureprof/PD19GALAXIA.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture qui inspire la galaxie.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD20 MART
        </h1>
        <Image
          src="/static/images/textureprof/PD20MART.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D représentant la surface d’une crête.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD21 ATLAS
        </h1>
        <Image
          src="/static/images/textureprof/PD21ATLAS.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D illustrant des fluides et des vagues.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD22 LEDA
        </h1>
        <Image
          src="/static/images/textureprof/PD22LEDA.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture qui représente une surface ridée.
        </p>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
