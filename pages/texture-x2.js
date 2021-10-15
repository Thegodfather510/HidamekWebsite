import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function TextureX2() {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="w-full max-w-md pt-16 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD11 SOLC X2
        </h1>
        <Image
          src="/static/images/textureX2/PD11SOLCX2.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec une texture légèrement ondulée, à section variable
          semi-circulaire et la largeur de l’étape.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD12 SOFT X2
        </h1>
        <Image
          src="/static/images/textureX2/PD12SOFTX2.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec une texture souple à canaux de section variable, ondulé
          et pas large.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD13 ROC X2
        </h1>
        <Image
          src="/static/images/textureX2/PD13ROCX2.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture aléatoire d’éléments polygonaux et pas large.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD14 PUNXA X2
        </h1>
        <Image
          src="/static/images/textureX2/PD14PUNXAX2.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture en losanges pyramidales et pas large.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD15 DESERT
        </h1>
        <Image
          src="/static/images/textureX2/PD15DESERT.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec texture à canaux de section variable, trajectoire en
          ligne droite et pas large.
        </p>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="w-full max-w-md pt-8 mx-auto lg:max-w-5xl">
        <h1 className="pb-6 text-2xl font-bold text-left text-black">
          PD16 TRAMA
        </h1>
        <Image
          src="/static/images/textureX2/PD1TRAMA.jpg"
          width="980"
          height="224"
        />
        <p className="text-sm text-center lg:text-xl">
          <strong>Caractéristiques: </strong>
          <br />
          Modèle 3D avec une texture légèrement ondulée, à section variable
          semi-circulaire et la largeur de l’étape.
        </p>
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}
