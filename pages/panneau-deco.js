import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Link from "next/link";
import Image from "next/image";
export default function PanneauDeco() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="self-center w-4/5 h-screen py-16 ">
        <Image
          src="/static/images/decoratif/deco1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-full pt-8 pb-8 bg-gray-100">
        <Grid col="3" row="1">
          <div className="pb-8">
            <div className="m-auto lg:pr-8">
              <img
                src="/static/images/decoratif/deco2.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                TEXTURES DOUCES
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Panneaux bas-relief fait sur les techniques de 2D et 3D.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/texture-douce" passHref>
                  <a className="px-4 py-2 font-bold text-white bg-red-400 rounded-full cursor-pointer hover:bg-red-700">
                    LIRE PLUS
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <div className="m-auto lg:pr-8">
              <img
                src="/static/images/decoratif/deco2.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">TEXTURES X2</h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Textures sur panneaux grande échelle
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/texture-x2" passHref>
                  <a className="px-4 py-2 font-bold text-white bg-red-400 rounded-full cursor-pointer hover:bg-red-700">
                    LIRE PLUS
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <div className="m-auto lg:pr-8">
              <img
                src="/static/images/decoratif/deco3.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                TEXTURES PROFONDES
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Reliefs grande profondeur réalisés sur panneaux.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/texture-profond" passHref>
                  <a className="px-4 py-2 font-bold text-white bg-red-400 rounded-full cursor-pointer hover:bg-red-700">
                    LIRE PLUS
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
