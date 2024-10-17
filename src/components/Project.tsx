import styled from "styled-components";

type ProjectInfo = {
    MyWeather: string;
    "Gym App": string;
    "To-Do List": string;
    "Modern Furniture": string;
    Karting: string;
};

const projectInfo: ProjectInfo = {
    MyWeather:
        "React, TypeScript, Sass, Redux Toolkit, OpenWeatherMap API, Swiper",
    "Gym App": "React, ReactDnD, React Router, MongoDB, MongoDB Realm",
    "To-Do List": "HTML, Css and JS",
    "Modern Furniture": "HTML, Css, Bootstrap, JS, SlickJs",
    Karting: "HTML, Css, Bootstrap, JS, Swiper",
};

const Item = styled.div<{ $bg_color?: string; $color?: string }>`
    width: 90%;
    aspect-ratio: 3/2;
    background: ${(props) => props.$bg_color || "#666666"};
    color: ${(props) => props.$color || "#fff"};
    padding: 20px 40px;
    text-align: center;
    display: grid;
    grid-template-rows: 30% 40% auto;
    justify-items: center;

    @media screen and (max-width: 950px) {
        padding: 10px 10px;
    }

    @media screen and (max-width: 850px) {
        aspect-ratio: 3/2.1;
    }

    @media screen and (max-width: 600px) {
        aspect-ratio: 3.1/2.4;
    }

    @media screen and (max-width: 525px) {
        aspect-ratio: 3/2;
        width: 75%;
    }
`;

const Header = styled.h2`
    align-self: center;

    @media screen and (max-width: 525px) {
        font-size: 1.4em;
    }
`;

const Paragraph = styled.p`
    margin-top: 1em;
    font-size: 0.8em;

    @media screen and (max-width: 1200px) {
        margin-top: 1.2em;
    }

    @media screen and (max-width: 950px) {
        margin-top: 1.3em;
    }

    @media screen and (max-width: 850px) {
        font-size: 1em;
    }

    @media screen and (max-width: 650px) {
        font-size: 0.9em;
    }

    @media screen and (max-width: 525px) {
        margin-top: 1em;
    }

    @media screen and (max-width: 400px) {
        margin-top: 1em;
    }
`;
const VisitButton = styled.button<{ $dark?: boolean }>`
    width: 5em;
    height: 1.8em;
    margin-top: 1em;
    font-size: 1em;
    border-radius: 4px;
    border: none;
    background: ${(props) =>
        props.$dark
            ? "linear-gradient(45deg, #2a2a2a, #0f1010)"
            : "linear-gradient(45deg, #ffffff, #ded3be)"};

    & a {
        color: ${(props) => (props.$dark ? "#fff" : "#0d0d0d")};
    }

    @media screen and (max-width: 525px) {
        width: 4em;
        height: 1.7em;
    }

    @media screen and (max-width: 1200px) {
        margin-top: 1.5em;
    }
`;

const Project = ({
    name,
    bg_color,
    link,
    color,
}: {
    name: string;
    bg_color: string;
    link: string;
    color?: string;
}) => {
    return (
        <Item $bg_color={bg_color} $color={color}>
            {name === "MyWeather" ? (
                <Header>
                    My
                    <span style={{ color: "#2762d4" }}>Weather</span>
                </Header>
            ) : (
                <Header>{name}</Header>
            )}
            <Paragraph>{projectInfo[name as keyof ProjectInfo]}</Paragraph>
            {name === "Modern Furniture" ? (
                <VisitButton $dark={true}>
                    <a href={link} target="_blank">
                        Visit
                    </a>
                </VisitButton>
            ) : (
                <VisitButton>
                    <a href={link} target="_blank">
                        Visit
                    </a>
                </VisitButton>
            )}
        </Item>
    );
};

export default Project;
