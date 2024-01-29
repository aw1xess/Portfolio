import styled, { keyframes } from "styled-components";
import email from "../assets/icons/email.png";
import telegram from "../assets/icons/telegram.png";
import github from "../assets/icons/github.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SlideLeft = keyframes`
  0% {
    opacity: 0;
	right: -100px;
  }

  45% {
	opacity: 0;
  }

  100% {
    opacity: 1;
	right: 0;
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
	display: grid;
	text-align: end;
`;

const Logo = styled.img`
	width: 2em;
	z-index: 2;
	cursor: pointer;
`;

const LogoLink = styled.a`
	z-index: 1;
	cursor: pointer;
`;

const StyledLi = styled.li`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: end;
	margin-bottom: 10px;

	& p {
		position: absolute;
		right: -100px;
		opacity: 0;
		z-index: 1;
		overflow: hidden;
		font-weight: 500;
		font-size: 0.8em;
		transition: 300ms ease-out, opacity 100ms ease-out;
	}

	&:hover p {
		right: 0;
		opacity: 1;
		padding: 10px 3em 10px 10px;
		animation: 300ms ${SlideLeft} ease-out;
	}
`;

const Contact = () => {
	return (
		<Container>
			<Content>
				<ul>
					<StyledLi>
						<p>Gmail</p>{" "}
						<LogoLink
							href="mailto:yariksvirshchuk@gmail.com"
							target="_blank"
						>
							<Logo src={email} />
						</LogoLink>
					</StyledLi>
					<StyledLi>
						<p>Telegram</p>{" "}
						<LogoLink href="https://t.me/awixess" target="_blank">
							<Logo src={telegram} />
						</LogoLink>
					</StyledLi>
					<StyledLi>
						<p>GitHub</p>{" "}
						<LogoLink
							href="https://github.com/aw1xess?tab=repositories"
							target="_blank"
						>
							<Logo src={github} />
						</LogoLink>
					</StyledLi>
				</ul>
			</Content>
		</Container>
	);
};

export default Contact;
