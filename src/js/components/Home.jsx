import CardProduct from "./CardProduct"
import NavBar from "./NavBar"
import JumbotronProduct from "./JumbotronProduct"
import FooterLandingPage from "./FooterLandingPage"



const Home = () => {
	return (
	<div>
		<NavBar />
		<JumbotronProduct /> 
		<CardProduct />
		<FooterLandingPage />
	</div>
	)
}
export default Home