
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import {Link} from "react-router-dom";

const linkClassName = "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

export default function NavBar() {
	return (
		<Navbar fluid rounded>
			<Link to={"/"}>
				<NavbarBrand>
					<img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Alex Hunter</span>
				</NavbarBrand>
			</Link>
			<NavbarToggle />
			<NavbarCollapse>
			<Link to={"/"} className={linkClassName}>
				Home
			</Link>
			<Link to={"/blog"} className={linkClassName}>
				Blog
			</Link>
			<Link to={"/recipes"} className={linkClassName}>
				Recipes
			</Link>

			{/* <NavbarLink href="#" active>
				Home
			</NavbarLink>
			<NavbarLink as={Link} href="#">
				About
			</NavbarLink>
			<NavbarLink href="#">Services</NavbarLink>
			<NavbarLink href="#">Pricing</NavbarLink>
			<NavbarLink href="#">Contact</NavbarLink> */}
			</NavbarCollapse>
		</Navbar>
  );
}
