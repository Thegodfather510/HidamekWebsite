import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";

const About = () => {
  return (
    <div>
      <div className="relative z-50">
        <Navbar page="about" />
      </div>
      <div className="w-full h-screen pt-16">
        <div className="relative h-2/3 lg:h-4/5">
          <div className="absolute inset-x-0 z-20 w-full text-6xl font-extrabold text-center top-1/4 text-gray-50 ">
            <p className="pt-20 text-6xl font-bold text-center">WHO WE ARE</p>
          </div>
          <img
            src="/static/images/HeroImages/Bricks.jpg"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <Grid col="2" row="1">
          <div className="max-w-sm pb-6 m-auto lg:pb-0">
            <h1 className="pb-6 text-xl font-bold text-center lg:text-4xl lg:font-extrabold">
              NOTRE MISSION
            </h1>
            <p className="max-w-xs m-auto font-medium text-justify lg:max-w-lg lg:font-semibold">
              Nous sommes spécialisés dans la fabrication de panneaux
              acoustiques et décoratifs pour l’architecture d’intérieur.Chez{" "}
              <span className="underline"> HIDAMEK</span>, nous développons et
              fabriquons des panneaux acoustiques et décoratifs pour murs et
              faux plafonds destinés au monde du traitement acoustique et de la
              décoration d’intérieur.
            </p>
          </div>
          <div className="m-auto lg:pr-8">
            <img
              src="/static/images/HeroImages/Meeting.jpg"
              className="object-cover m-auto border-0 rounded-md"
            />
          </div>
        </Grid>
        <Grid col="2" row="1">
          <div className="max-w-sm pb-6 m-auto lg:pb-0">
            <h1 className="pb-6 text-lg font-semibold text-center lg:text-2xl lg:font-bold">
              Expériences extraordinaires
            </h1>
            <p className="max-w-xs m-auto font-medium text-justify lg:max-w-lg lg:font-semibold">
              Nous disposons des meilleurs professionnels et d’une technologie
              de pointe, en innovant chaque jour pour apporter les meilleures
              solutions en matière de panneaux acoustiques.
            </p>
          </div>
          <div className="max-w-sm pb-6 m-auto lg:pb-0">
            <h1 className="pb-6 text-lg font-semibold text-center lg:text-2xl lg:font-bold">
              Nos valeurs fondamentales
            </h1>
            <p className="max-w-xs m-auto font-medium text-justify lg:max-w-lg lg:font-semibold">
              La passion, signifie que nous utilisons votre dynamisme et votre
              engagement pour dynamiser, engager et inspirer les autres. Le
              courage, signifie que nous sommes entreprenants et que nous
              prenons ainsi des risques, dépassons les frontières et
              expérimentons. L'intégrité, signifie que nous sommes toujours
              ouverts, honnêtes, éthiques et authentiques.
            </p>
          </div>
        </Grid>
        <div className="h-4 bg-gray-100"></div>
        <Footer />
      </div>
    </div>
  );
};
export default About;
