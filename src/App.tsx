import styled from "styled-components";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

const Page = styled.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	padding: max(20px, 4vmin);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #0f1010;
	color: #fff;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid #fff;
	padding: max(10px, 2vmin) max(10px, 3vmin);
	display: grid;
	grid-template-rows: 4em auto;
	grid-template-columns: 2fr 1fr;
	row-gap: 4em;
	grid-template-areas:
		"a c"
		"b c";

	@media screen and (max-width: 1024px) {
		grid-template-columns: 60% auto;
	}

	@media screen and (max-width: 750px) {
		grid-template-columns: 50% auto;
	}

	@media screen and (max-width: 525px) {
		grid-template-areas:
			"a"
			"b"
			"c";
		grid-template-columns: 100%;
		row-gap: 2em;
	}

	@media screen and (max-width: 370px) {
		row-gap: 4em;
	}
`;

const Header = styled.h1`
	font-size: 2.5em;

	@media screen and (max-width: 760px) {
		font-size: 2em;
	}
`;

const SubHeader = styled.h2`
	font-size: 1em;
	font-weight: 300;
`;

const SecondColumn = styled.section`
	width: 100%;
	height: 100%;
	grid-area: c;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	display: grid;

	&::-webkit-scrollbar {
		display: none;
	}
`;

function App() {
	return (
		<Page>
			<Wrapper>
				<div>
					<Header>Yaroslav Svirshchuk</Header>
					<SubHeader>Front-End Developer</SubHeader>
				</div>
				<Menu></Menu>
				<SecondColumn>
					<Outlet />
				</SecondColumn>
			</Wrapper>
		</Page>
	);
}

export default App;
