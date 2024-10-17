import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    justify-items: end;
    align-items: end;
    animation: 1s ${fadeIn} ease-out;
`;

const Content = styled.section`
    width: 18vw;
    display: grid;
    gap: 3em;
    text-align: end;
    margin-bottom: 10px;
    & p {
        font-size: 0.8em;
        opacity: 0.85;
    }

    @media screen and (max-width: 1200px) {
        width: 20vw;
    }

    @media screen and (max-width: 850px) {
        width: 24vw;

        & p {
            font-size: 0.9em;
        }
    }

    @media screen and (max-width: 600px) {
        width: 38vw;
    }

    @media screen and (max-width: 525px) {
        width: 38vw;
    }
`;

const Header = styled.h3`
    font-size: 1.2em;
    margin-bottom: 16px;
    font-weight: 500;
    border-bottom: 1px solid #fff;
`;

const SubHeader = styled.h4`
    font-size: 0.9em;
    font-weight: 500;

    @media screen and (max-width: 850px) {
        font-size: 1em;
    }
`;

const ToolsItem = styled.li`
    font-size: 0.8em;
    opacity: 0.85;
    &:not(:last-child) {
        margin-bottom: 0.6em;
    }

    @media screen and (max-width: 850px) {
        font-size: 0.9em;
    }
`;

const About = () => {
    return (
        <Container>
            <Content>
                <div>
                    <Header>About me</Header>
                    <p>
                        Hi! I'm 21 years old Front-End developer from Ukraine. I
                        want to progress in the field of front-end development
                        and I am looking for my first job in this specialty. It
                        is important for me to get the first experience - work
                        and difficulties do not scare me&#41;
                    </p>
                </div>
                <div>
                    <Header>What tools do I use?</Header>
                    <ul>
                        <li>
                            <SubHeader>Structure and Logic</SubHeader>
                        </li>
                        <ToolsItem>
                            React + TypeScript, Redux Toolkit, React Router
                        </ToolsItem>
                        <li>
                            <SubHeader>Styles</SubHeader>
                        </li>
                        <ToolsItem>
                            Styled Components, Sass, Scss, Bootstrap
                        </ToolsItem>
                        <li>
                            <SubHeader>Libraries and Frameworks</SubHeader>
                        </li>
                        <ToolsItem>Swiper, ReactDnD, SlickJs etc.</ToolsItem>
                    </ul>
                </div>
            </Content>
        </Container>
    );
};

export default About;
