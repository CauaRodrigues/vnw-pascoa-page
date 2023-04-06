import React from "react";
import data from "../../data";
import * as S from "./main.styled.jsx";
import Card from "../Card";

export default function Main() {
	return (
		<S.ContainerProducts>
			<div className="content">
				{data.map((product) => (
					<Card
						image={product.image}
						descricao={product.descricao}
						desconto={product.desconto}
					/>
				))}
			</div>
		</S.ContainerProducts>
	);
}
