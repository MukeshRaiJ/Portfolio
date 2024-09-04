import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import services from "@/app/services/page";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between item-center">
        {/* logo */}
        <Link href="/" className="text-4xl font-semibold">
          Mukesh<span className="text-accent"> Rai</span>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
          </div>
      </div>
    </header>
  );
};

export default Header;
