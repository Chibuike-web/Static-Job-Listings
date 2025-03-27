import styled from "styled-components";
import { JobType } from "../store/useJobStore";

export default function Joblist({
	id,
	company,
	logo,
	new: isNew,
	featured,
	position,
	role,
	level,
	postedAt,
	contract,
	location,
	languages,
	tools,
}: JobType) {
	return (
		<Article>
			<MainContent>
				<img src={logo} alt={`${company} logo`} />
				<Aside>
					<header>
						<h2>{company}</h2>
						<p>
							{isNew && <span>NEW!</span>}
							{featured && <span>FEATURED</span>}
						</p>
					</header>
					<h3>{position}</h3>
					<p>
						<span>{postedAt}</span> • <span>{contract}</span> • <span>{location}</span>
					</p>
				</Aside>
			</MainContent>

			<ListContainer>
				<li>
					<ListButton type="button">{role}</ListButton>
				</li>
				<li>
					<ListButton type="button">{level}</ListButton>
				</li>
				{languages.map((language, index) => (
					<li key={index}>
						<ListButton type="button">{language}</ListButton>
					</li>
				))}
				{tools.map((tool, index) => (
					<li key={index}>
						<ListButton type="button">{tool}</ListButton>
					</li>
				))}
			</ListContainer>
		</Article>
	);
}

// Styled Components
const Article = styled.article`
	background-color: white;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: var(--box-shadow);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const MainContent = styled.section`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const Aside = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	header {
		display: flex;
		align-items: center;
		gap: 8px;

		h2 {
			font-size: 18px;
			font-weight: 700;
			color: var(--DesaturatedDarkCyan);
		}

		p {
			display: flex;
			gap: 8px;
			align-items: center;

			span:first-of-type {
				background-color: var(--DesaturatedDarkCyan);
				color: white;
				padding: 6px 8px;
				border-radius: 1000px;
				font-size: 14px;
				font-weight: 500;
			}

			span:last-of-type {
				background-color: var(--VeryDarkGrayishCyan);
				color: white;
				padding: 6px 8px;
				border-radius: 1000px;
				font-size: 14px;
				font-weight: 500;
			}
		}
	}

	h3 {
		font-size: 20px;
		&:hover {
			color: var(--DesaturatedDarkCyan);
			cursor: pointer;
		}
	}
	p {
		color: var(--DarkGrayishCyan);
		display: flex;
		align-items: center;
		gap: 12px;
		font-weight: 500;
		font-size: 16px;
	}
`;

const ListContainer = styled.ul`
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
`;

const ListButton = styled.button`
	background: var(--LightGrayishCyan2);
	color: var(--DesaturatedDarkCyan);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	font-weight: 700;
	font-size: 15px;
	font-family: "League Spartan";
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: var(--DesaturatedDarkCyan);
		color: white;
	}
`;
