import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuList = styled.ul`
	font-weight: 500;
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-area: b;
`;

const MenuItem = styled.li`
	width: fit-content;
`;

const MenuLink = styled(NavLink)<{ $isActive?: boolean }>`
	position: relative;
	&:hover:after {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		top: 0;
		left: 0px;
		background: rgba(255, 255, 255, 0.5);
		filter: ${(props) => (props.$isActive ? "none" : "blur(20px)")};
		border-radius: 2px;
	}

	&.active {
		visibility: hidden;
	}

	&.active::after {
		content: "";
		visibility: visible;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0px;
		width: 20px;
		height: 20px;
		background: #fff;
		border-radius: 50%;
		filter: none;
		cursor: default;
	}
`;

const Menu = () => {
	return (
		<MenuList>
			<MenuItem>
				<MenuLink to="/">Home</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="/projects">Projects</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="/about">About</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="/contact">Contact</MenuLink>
			</MenuItem>
		</MenuList>
	);
};

export default Menu;
