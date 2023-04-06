import styled from "styled-components";

export const ContainerProducts = styled.section`
	width: 100%;
	padding: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.content {
		width: 65vw;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;

		@media (max-width: 730px) {
			width: 100%;
		}

		@media (max-width: 500px) {
			grid-template-columns: 1fr 1fr;
		}
	}
`;
