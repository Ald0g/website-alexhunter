import Footer from "./Footer";
import NavBar from "./NavBar";
import Container from '@mui/material/Container';

export default function MainPage({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar/>
			<Container maxWidth="lg" className="flex flex-col items-center gap-3 min-h-screen mt-8 mb-8">
				{children}
			</Container>
			<Footer/>
		</>
	)
}