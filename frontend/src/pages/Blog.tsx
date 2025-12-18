import { Button } from "flowbite-react";
import MainPage from "../layouts/content/MainPage";

export default function Blog() {
  return (
    <MainPage>
      <h1 className="font-bold">Welcome to the Blog Page</h1>
      <p>This is the main landing page of the application.</p>
      <Button>Click Me</Button>
    </MainPage>
  );
}
