
import { Button } from "@/components/ui/button";
import { FaArrowDownLong } from "react-icons/fa6";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Services from "./services/page";
import Resume from "./resume/page";
import Work from "./work/page1";
import Contact from "./contact/page";
import Stats from "@/components/Stats";
import Footer from "./work/footer/footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-5">
              Hello I'm <br />
              <span className="text-accent">Mukesh Rai</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FaArrowDownLong className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-md flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <hr className="w-full border-t-1 border-gray-300 my-4" />
      <Services />
      <hr className="w-full border-t-1 border-gray-300 my-4" />
      <Resume />
      <hr className="w-full border-t-1 border-gray-300 my-4" />
      <Work />
      <hr className="w-full border-t-1 border-gray-300 my-4" />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
