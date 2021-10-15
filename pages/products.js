import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Link from "next/link";
export default function Products() {
  return (
    <div className="flex flex-col">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="w-full h-screen py-16 bg-gray-100">
        <div className="relative h-2/3 lg:h-4/5">
          <div className="absolute inset-x-0 z-20 w-full text-6xl font-extrabold text-center text-white top-1/4">
            <p className="pt-16 text-7xl">SERVICES</p>
          </div>
          <img
            src="/static/images/HeroImages/HeroImage3.jpg"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="py-10">
          <h1 className="pt-2 pb-6 text-2xl font-bold text-center lg:pt-9 lg:font-extrabold lg:text-4xl">
            Products
          </h1>
          <p className="max-w-sm text-center lg:max-w-full">
            HIDAMEK a une large gamme de produits, Nous vous invitons à
            découvrir nos produits et à nous contacter, et nos produits ont
            également été certifiés par les organismes compétents. Nous visons à
            produire des produits pour améliorer l’efficacité et la
            commodité(acoustiques,décoratifs).
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-100 pt-14">
        <div className="w-3/4 h-px bg-gray-700"></div>
      </div>
      <div className="h-full pt-8 pb-8 bg-gray-100">
        <Grid col="2" row="1">
          <div className="pb-8">
            <div className="m-auto lg:pr-8">
              <img
                src="/static/images/products/product1.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                Panneaux acoustiques
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Notre société HIDAMEK produit, fabrique des panneaux acoustiques
                et décoratifs pour murs, plafonds et meubles destinés aux
                restaurants, théâtres, auditoriums, hôtels et tous les projets
                pour lesquels un aménagement intérieur technique et design est
                requis.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-aco" passHref>
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
                src="/static/images/products/product2.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                Panneaux décoratifs 2D et 3D
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Découvrez les Panneaux décoratifs qui donnent vie à vos murs
                avec des motifs muraux texturés modernes et contemporains.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-deco" passHref>
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
