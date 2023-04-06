import React from "react";
import * as S from "./header.styled";

export default function Header() {
	return (
		<S.Header>
			<section className="top">
				<figure>
					<img src="/logo-cake.png" alt="logo doce lar" />
					<figcaption>Doce Lar</figcaption>
				</figure>

				<S.NavBox>
					<ul>
						<li>produtos</li>
						<li>onde encontrar</li>
						<li>contatos</li>
					</ul>
				</S.NavBox>
			</section>

			<S.Banner>
				<div className="content">
					<h1>Cada produto feito artesanalmente</h1>
					<div className="arrows">
						<button>
							<img src="/assets/arrow.png" alt="arrow icon" />
						</button>
						<button>
							<img src="/assets/arrow.png" alt="arrow icon" className="right" />
						</button>
					</div>
				</div>
			</S.Banner>
		</S.Header>
	);
}
