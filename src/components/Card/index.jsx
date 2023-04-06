import React from "react";
import * as S from "./card.styled";

export default function Card({ image, descricao, desconto }) {
	return (
		<S.ContainerBox hasDesconto={desconto}>
			{desconto ? (
				<span className="desconto-label">{desconto} desconto</span>
			) : null}
			<S.Box>
				<img src={image} alt={descricao} />
				<p>{descricao}</p>
				<button>Comprar</button>
			</S.Box>
		</S.ContainerBox>
	);
}
