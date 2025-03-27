import styled from "styled-components";
import Desktop from "../assets/bg-header-desktop.svg";
import Mobile from "../assets/bg-header-mobile.svg";

import { useEffect, useState } from "react";

export default function Header() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			{windowWidth > 768 ? (
				<Nav>
					<img src={Desktop} alt="Nav Image for the Deskstop" />
				</Nav>
			) : (
				<Nav>
					<img src={Mobile} alt="Nav Image for the Deskstop" />
				</Nav>
			)}
		</>
	);
}

const Nav = styled.nav`
	background-color: var(--DesaturatedDarkCyan);
	display: flex;
	justify-content: center;
	margin-block-end: 74px;
`;
