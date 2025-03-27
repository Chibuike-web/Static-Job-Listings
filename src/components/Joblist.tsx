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
						<BadgesContainer>
							{isNew && <BadgeNew>NEW!</BadgeNew>}
							{featured && <BadgeFeatured>FEATURED</BadgeFeatured>}
						</BadgesContainer>
					</header>
					<h3>{position}</h3>
					<InfoText>
						<span>{postedAt}</span>
						<span>{contract}</span>
						<span>{location}</span>
					</InfoText>
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

const Article = styled.article`
	background-color: white;
	padding: 1.5rem;
	border-radius: 0.5rem;
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
		gap: 0.5rem;

		h2 {
			font-size: 1.125rem;
			font-weight: 700;
			color: var(--DesaturatedDarkCyan);
		}
	}

	h3 {
		font-size: 1.25rem;
		&:hover {
			color: var(--DesaturatedDarkCyan);
			cursor: pointer;
		}
	}
`;

const InfoText = styled.p`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-weight: 500;
	font-size: 1rem;
	color: var(--DarkGrayishCyan);

	span:not(:first-child)::before {
		content: "•";
		margin-right: 0.5rem;
		color: var(--DarkGrayishCyan);
	}
`;

const BadgesContainer = styled.p`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

const BadgeNew = styled.span`
	background-color: var(--DesaturatedDarkCyan);
	color: white;
	padding: 0.375rem 0.5rem;
	border-radius: 62.5rem;
	font-size: 0.875rem;
	font-weight: 500;
	display: inline-block;
	text-transform: uppercase;
`;

const BadgeFeatured = styled(BadgeNew)`
	background-color: var(--VeryDarkGrayishCyan);
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
	border-radius: 0.25rem;
	font-weight: 700;
	font-size: 0.9375rem;
	font-family: "League Spartan";
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: var(--DesaturatedDarkCyan);
		color: white;
	}
`;
