import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative z-50">
        <Navbar page="home" />
      </div>
      <div className="w-full h-screen pt-16">
        <div className="relative h-2/3 lg:h-4/5">
          <div className="absolute inset-x-0 z-20 w-full text-6xl font-extrabold text-center text-white pt-14 top-1/4">
            <p>HIDAMEK</p>
            <p className="text-xl font-bold">
              Faire du ciel le plus bel endroit de la terre
            </p>
          </div>
          <img
            src="/static/images/HeroImages/Wallpaper1.jpg"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="pt-2 text-2xl font-bold text-center bg-gray-100 lg:pt-9 lg:font-extrabold lg:text-4xl">
            INFORMATIONS
          </h1>
          <Grid col="2" row="1">
            <div className="pb-8">
              <div className="m-auto lg:pr-8">
                <img
                  src="/static/images/InfoImg/image1.jpg"
                  className="object-cover m-auto border-0 rounded-md"
                  width="480px"
                  height="480px"
                />
              </div>
              <p className="max-w-xs pt-3 m-auto text-center lg:font-medium lg:text-xl">
                HIDAMEK, Nous avons les meilleurs professionnels et la
                technologie la plus avancée, Notre technologie et nos produits
                ont été testés par nos clients. et a toujours reçu de bonnes
                critiques.
              </p>
              <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
                <div>
                  <a
                    className="px-4 py-2 font-bold text-white bg-red-400 rounded-full cursor-pointer hover:bg-red-700"
                    href="/projects"
                    target="_blank"
                  >
                    LIRE PLUS
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="m-auto lg:pr-8">
                <img
                  src="/static/images/InfoImg/image2.jpg"
                  width="480px"
                  height="318px"
                  className="object-cover m-auto border-0 rounded-md"
                />
              </div>
              <p className="max-w-xs pt-3 m-auto text-center lg:text-xl">
                Nous vous invitons à découvrir nos produits et à nous contacter,
                et nos produits ont également été certifiés par les organismes
                compétents. Nous visons à produire des produits pour améliorer
                l'efficacité et la commodité.
              </p>

              <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
                <div>
                  <a
                    className="px-4 py-2 font-bold text-white bg-red-400 rounded-full cursor-pointer hover:bg-red-700"
                    href="/projects"
                    target="_blank"
                  >
                    LIRE PLUS
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <div className="pt-6 bg-gray-100">
            <h1 className="pt-2 text-2xl font-bold text-center bg-gray-100 lg:pt-9 lg:font-extrabold lg:text-4xl">
              Projects
            </h1>
            <p className="max-w-xs pt-3 m-auto text-sm antialiased text-center lg:text-base">
              Certains de nos travaux sont effectués partout dans le monde.
            </p>
          </div>
          <Grid col="4" row="2">
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image1.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image2.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image3.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image4.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image5.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image6.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image7.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static/images/ProjectImg/image8.jpg"
                height="480px"
                width="480px"
                className="object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </Grid>
          <div className="flex flex-col items-center justify-center w-full h-24 my-auto text-white bg-red-500 lg:flex-row">
            <div className="pt-2 pl-2 pr-4 lg:pt-0 lg:pl-0">
              <h1 className="antialiased font-semibold text-center">
                Vous recherchez une entreprise de construction de qualité et
                spécialisée pour votre projet?
              </h1>
            </div>
            <div className="py-4 lg:py-0">
              <a
                className="px-4 py-2 font-bold text-black bg-white rounded-full cursor-pointer hover:bg-gray-100"
                href="/projects"
                target="_blank"
              >
                LIRE PLUS
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <h1 className="pt-2 text-2xl font-bold text-center lg:pt-9 lg:font-extrabold lg:text-4xl">
            Services
          </h1>
          <p className="text-sm font-medium text-center ">
            Ce que nous faisons et où sommes-nous bons
          </p>
        </div>
        <div className="pb-5 bg-gray-100">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/static/images/servicesIcon/icon1.png"
                width="100px"
                height="100px"
              />
              <div>
                <h1 className="pt-2 text-xl font-semibold text-center lg:pt-9 lg:font-bold lg:text-2xl">
                  CONCEPTION ET CONSTRUCTION
                </h1>
                <p className="max-w-xs pt-3 m-auto text-center lg:text-xl">
                  Rejoignez la plus grande communauté avec des millions
                  d'utilisateurs et des milliers de développeurs construisant
                  leurs pages avec Visual Compositeur.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pl-4">
              <Image
                src="/static/images/servicesIcon/icon2.png"
                width="100px"
                height="100px"
              />
              <div>
                <h1 className="pt-2 text-xl font-semibold text-center lg:pt-9 lg:font-bold lg:text-2xl">
                  PLANCHER DE BOIS FRANC
                </h1>
                <p className="max-w-xs pt-3 m-auto text-center lg:text-lg">
                  Une documentation complète qui répond à tout ce dont vous avez
                  besoin connaître Visual Composer - pour les débutants et les
                  professionnels.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pl-4">
              <Image
                src="/static/images/servicesIcon/icon3.png"
                width="100px"
                height="100px"
              />
              <div>
                <h1 className="pt-2 text-xl font-semibold text-center lg:pt-9 lg:font-bold lg:text-2xl">
                  CARRELAGE ET PEINTURE
                </h1>
                <p className="max-w-xs pt-3 m-auto text-center lg:text-lg">
                  Plusieurs options qui vous permettent de tout faire
                  complètement une fois qu'il s'agit de WordPress et de la
                  gestion de contenu une fois
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pl-4">
              <Image
                src="/static/images/servicesIcon/icon4.png"
                width="100px"
                height="100px"
              />
              <div>
                <h1 className="pt-2 text-xl font-semibold text-center lg:pt-9 lg:font-bold lg:text-2xl">
                  HOUSE RENOVATION
                </h1>
                <p className="max-w-xs pt-3 m-auto text-center lg:text-lg">
                  Conçus dans un souci de sécurité, nous auditons constamment
                  les visuels Composer pour répondre aux plus hauts standards de
                  sécurité et web développement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen pt-12 bg-gray-100">
          <div className="relative h-2/3 lg:h-4/5">
            <div className="absolute inset-x-0 z-20 w-full text-3xl font-extrabold text-center text-gray-50 lg:text-6xl pt-14 top-1/4">
              <p className="pb-6">NOTRE ENTREPRISE</p>
              <p className="max-w-sm text-lg font-bold text-gray-200 lg:max-w-full lg:text-xl">
                Notre société HIDAMEK produit, fabrique des panneaux acoustiques
                et décoratifs pour murs, plafonds et meubles destinés aux
                restaurants, théâtres, auditoriums, hôtels et tous les projets
                pour lesquels un aménagement intérieur technique et design est
                requise.
              </p>
            </div>
            <img
              src="/static/images/HeroImages/Image4.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="pb-8 bg-gray-100">
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
                  Notre société HIDAMEK produit, fabrique des panneaux
                  acoustiques et décoratifs pour murs, plafonds et meubles
                  destinés aux restaurants, théâtres, auditoriums, hôtels et
                  tous les projets pour lesquels un aménagement intérieur
                  technique et design est requis.
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
        <div className="w-full h-full pt-6 bg-gray-100">
          <div className="relative h-2/3 lg:h-4/5">
            <div className="absolute inset-x-0 z-20 w-full pt-10 font-extrabold text-center text-gray-50 text-8xl top-1/4">
              <p className="text-white">HIDAMEK</p>
              <p className="pt-10 text-base font-bold ">
                vous contrôlez votre bonheur.
              </p>
            </div>
            <img
              src="/static/images/HeroImages/HeroImage2.jpg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
