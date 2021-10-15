import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pt-16 pb-8 text-white bg-gray-900">
      <section className="flex flex-col items-center justify-center p-6 mb-6 text-center">
        <p className="mb-6 text-2xl">
          Rejoignez la newsletter Aventure pour recevoir nos meilleures offres
          de HIDAMEK
        </p>
        <p className="mb-6 text-xl">
          Vous pouvez vous désabonner à tout moment.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="py-2 px-5 rounded-sm mr-2.5 outline-none text-lg mb-4 border border-solid border-white text-black"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="px-5 py-2 text-white transition-all duration-300 ease-out bg-transparent border-2 border-white rounded-sm outline-none cursor-pointer ">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="flex justify-center w-full max-w-lg pt-8 lg:pt-0">
        <div className="flex flex-col lg:flex-row">
          <div className="box-border flex flex-col items-start w-40 m-4 text-left">
            <h2 className="mb-4 font-semibold">À propos de nous</h2>
            <a href="/sign-up">Comment ça fonctionne</a>
            <a href="/">Testimonials</a>
            <a href="/">Témoignages</a>
            <a href="/">Investors</a>
            <a href="/">Conditions d'utilisation</a>
          </div>
          <div className="box-border flex flex-col items-start w-40 m-4 text-left">
            <h2 className="mb-4 font-semibold">À propos de nous</h2>
            <a href="/">Contacter</a>
            <a href="/">Support</a>
            <a href="/">Destinations</a>
            <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="box-border flex flex-col items-start w-40 m-4 text-left">
            <h2 className="mb-4 font-semibold">Videos</h2>
            <a href="/">Soumettre la vidéo</a>
            <a href="/">Ambassadors</a>
            <a href="/">Agence</a>
            <a href="/">Influenceur</a>
          </div>
          <div className="box-border flex flex-col items-start w-40 m-4 text-left">
            <h2 className="mb-4 font-semibold">Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="w-full max-w-lg">
        <div className="flex flex-col items-center justify-between w-11/12 max-w-lg mx-auto mt-10 mb-0 ">
          <div>
            <a
              href="/"
              className="flex items-center justify-start mb-4 ml-5 text-3xl text-white no-underline cursor-pointer "
            >
              HIDAMEK
              <i className="fab fa-typo3" />
            </a>
          </div>
          <small className="mb-4 text-white">HIDAMEK © 2021</small>
          <div className="flex items-center justify-between w-56">
            <a
              className="text-2xl text-white"
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className="text-2xl text-white"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              className="text-2xl text-white"
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTubeIcon />
            </a>
            <a
              className="text-2xl text-white"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              className="text-2xl text-white"
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
