import styled from "styled-components";

export const Box = styled.div`
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
	gap: 1rem;

	img {
		width: 100%;
	}

	button {
		background-color: #f2b705;
		border: none;
		padding: 12px 16px;
		font-size: 0.9rem;
		font-weight: 700;

		box-shadow: 3px 5px 12px rgba(0, 0, 0, 0.45);
	}
`;

export const ContainerBox = styled.div`
	margin-top: ${(props) => (props.hasDesconto ? 0 : "20px")};

	.desconto-label {
		background-color: #f28705;
		padding: 8px;
		padding-bottom: 0;
		margin-left: 12px;
		color: #ffff;
		font-weight: 500;
		font-size: 0.9rem;
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
	}
`;
