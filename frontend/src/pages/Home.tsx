import NavBar from "@/layouts/content/NavBar";
import MainPage from "../layouts/content/MainPage";
import tempImage from "@/assets/projects/temp.jpg";
import Grid from "@mui/material/Grid";
import { Heading1, Heading2 } from "../components/Headings";
import { ButtonPrimary } from "../components/Buttons";

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      size={{ sm: 12, md: 6 }}
      className="flex flex-col items-center justify-center p-4"
    >
      {children}
    </Grid>
  );
}

export default function Home() {
  return (
    <MainPage>
      {/* Headline */}
      <Heading1>Alex Hunter</Heading1>

      {/* Project preview */}
      <Grid container spacing={2}>
        <GridItem>
          <img src={tempImage} />
        </GridItem>
        <GridItem>
          <Heading2>Project Portfolio</Heading2>
          <p className="mb-4">Explore my past projects.</p>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </GridItem>
        <GridItem>
          <Heading2>Virtual Resume</Heading2>
          <p className="mb-4">Learn about my work experience and skills.</p>
          <ButtonPrimary>Learn More</ButtonPrimary>
        </GridItem>
        <GridItem>
          <img src={tempImage} />
        </GridItem>
      </Grid>
    </MainPage>
  );
}
