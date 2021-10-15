import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Grid from "../components/Grid";
import Link from "next/link";
export default function PanneauAco() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="relative z-50">
        <Navbar page="products" />
      </div>
      <div className="self-center w-4/5 h-screen py-16 ">
        <Image
          src="/static/images/acoustique/aco1.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-full pt-8 pb-8 bg-gray-100">
        <Grid col="2" row="2">
          <div className="pb-8">
            <div className="m-auto lg:pr-8">
              <img
                src="/static/images/acoustique/aco2.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                PANNEAUX ACOUSTIQUES RAINURÉS (SYSTÈME H+)​
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Une excellente performance d’absorption acoustique, très bon
                pour l’effet d’absorption acoustique
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-aco-rainures-system-h" passHref>
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
                src="/static/images/acoustique/aco3.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                PANNEAUX ACOUSTIQUES PERFORÉS (SYSTÈME GAG)
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Le panneau de mur et de plafond de diamant s’occupe
                particulièrement des unités d’absorption acoustique.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-aco-prefores-system-gag" passHref>
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
                src="/static/images/acoustique/aco4.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center">
                PANNEAUX ACOUSTIQUES RAINURÉS (SYSTÈME PAR)
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Une variété de matériaux selon le principe de l’acoustique, une
                correspondance raisonnable, le bruit a une excellente
                performance d’absorption acoustique.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-aco-rainures-system-par" passHref>
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
                src="/static/images/acoustique/aco2.jpg"
                className="object-cover m-auto border-0 rounded-md"
                width="480px"
                height="480px"
              />
            </div>
            <div className="pt-8">
              <h1 className="text-xl font-semibold text-center ">
                PANNEAUX ACOUSTIQUES MICROPERFORÉS
              </h1>
              <p className="max-w-xs pt-3 m-auto text-center lg:max-w-xl lg:font-medium lg:text-xl">
                Les panneaux acoustiques micro-perforés HIDAMEK sont la dernière
                tendance en matière de panneaux de bois perforés et les petits
                trous créent l’apparence d’un panneau de placage de bois non
                perforé.
              </p>
            </div>
            <div className="flex items-center justify-center w-4/5 pt-6 m-auto">
              <div>
                <Link href="/panneau-aco-rainures-system-par" passHref>
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
