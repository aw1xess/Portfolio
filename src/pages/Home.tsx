import styled, { keyframes } from "styled-components";
import logo from "../assets/images/logo.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.section`
	width: 100%;
	display: grid;
	align-items: end;
	justify-items: end;
	animation: 1s ${fadeIn} ease-out;
`;

const Logo = styled.img`
	width: 200px;

	@media screen and (max-width: 768px) {
		width: 150px;
	}

	@media screen and (max-width: 400px) {
		width: 100px;
	}
`;

const Home = () => {
	return (
		<Container>
			<Logo src={logo}></Logo>
		</Container>
	);
};

export default Home;
