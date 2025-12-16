import { Button } from "flowbite-react";
import NavBar from "@/layouts/content/NavBar";
import MainPage from "../layouts/content/MainPage";

export default function Home() {
	return (
		<MainPage>
			<h1 className="font-bold">Welcome to the Home Page</h1>
			<p>This is the main landing page of the application.</p>
			<Button>Click Me</Button>
		</MainPage>
	);
}
