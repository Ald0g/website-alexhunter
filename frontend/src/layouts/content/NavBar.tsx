import {
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "@/components/Link";
// import Link from "@/components/Link";

// const linkClassName = "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

export default function NavBar() {
  return (
    <Navbar fluid className="bg-(--color-primary-90) sticky top-0 z-50">
      <Link to={"/"}>
        <div className="flex items-center">
          <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Alex Hunter
          </span>
        </div>
      </Link>
      <NavbarToggle />
      <NavbarCollapse>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/recipes"}>Recipes</Link>
      </NavbarCollapse>
    </Navbar>
  );
}
