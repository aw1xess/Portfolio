import styled, { keyframes } from "styled-components";
import Project from "../components/Project";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    display: grid;
    justify-items: end;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 8em;
    gap: 2em;
    animation: 1s ${fadeIn} ease-out;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 525px) {
        padding-top: 0;
        gap: 1.5em;
    }

    @media screen and (max-width: 370px) {
        gap: 1em;
    }
`;

// const Header = styled.h3`
// 	text-align: end;
// 	margin-bottom: -2em;
// 	font-size: 1em;
// 	font-weight: 500;
// `;

const Projects = () => {
    return (
        <Container>
            <Project name="likewise." bg_color="#191919" />
            <Project
                name="MyWeather"
                bg_color="linear-gradient(45deg,#000436,#000214)"
                link="https://my-weather-lilac.vercel.app/"
            />
            <Project
                name="Gym App"
                bg_color="linear-gradient(45deg,#002d75,#001437)"
                link="https://gym-app-iota-peach.vercel.app/"
            />
            <Project
                name="To-Do List"
                bg_color="linear-gradient(45deg,#28303b,#101114)"
                link="https://aw1xess.github.io/To-Do-List/"
            />
            <Project
                name="Modern Furniture"
                bg_color="linear-gradient(45deg,#eeece8,#a69b85)"
                link="https://aw1xess.github.io/modern_furniture/"
                color="#212529"
            />
            <Project
                name="Karting"
                bg_color="linear-gradient(45deg,#063850,#031b27)"
                link="https://aw1xess.github.io/Batumi-Karting/"
            />
        </Container>
    );
};

export default Projects;
