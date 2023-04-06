import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: url("/assets/hero.png");
	background-repeat: no-repeat;
	background-size: cover;

	.top {
		width: 100%;
		display: flex;
		justify-content: space-around;

		@media (max-width: 400px) {
			flex-direction: column;
		}

		figure {
			background-color: #ffffff;
			width: max-content;
			padding: 0 12px;
			display: flex;
			align-items: center;
			gap: 1rem;

			@media (max-width: 400px) {
				width: 100%;
				justify-content: center;
				padding: 5px 0;
			}

			figcaption {
				font-size: min(1.8rem, 5vw);
				font-family: "Righteous", cursive;
				color: #f2b705;
			}
		}
	}
`;

export const NavBox = styled.nav`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.2);

	ul {
		width: 70%;
		justify-content: space-evenly;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		@media (max-width: 736px) {
			width: 100%;
		}

		@media (max-width: 400px) {
			padding: 10px 0;
		}

		li {
			color: #f28705;
			text-transform: uppercase;
			font-weight: 400;
			font-size: min(1rem, 3vw);
			cursor: pointer;
			display: flex;
			flex-direction: column;
			line-height: 1.6;

			&:hover {
				font-weight: 600;

				&::after {
					content: " ";
					width: 100%;
					padding: 1px;
					background-color: #ffffff;
				}
			}
		}
	}
`;

export const Banner = styled.section`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;

		h1 {
			color: #ffffff;
			font-size: min(2.5rem, 10vw);
			font-weight: 600;
			align-self: center;
			margin-bottom: 3rem;
		}

		.arrows {
			display: flex;
			justify-content: space-between;

			button {
				background-color: #f2b705;
				padding: 8px;

				img.right {
					transform: rotate(180deg);
				}
			}
		}
	}
`;
