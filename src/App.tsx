import "./globals.css";
import Header from "./components/Header";
import Joblist from "./components/Joblist";
import { useJobStore } from "./store/useJobStore";
import { JobType } from "./store/useJobStore";
import styled from "styled-components";

function App() {
	const { jobs } = useJobStore();
	return (
		<Container>
			<Header />
			<Section>
				{jobs.map(
					({
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
					}: JobType) => (
						<Joblist
							key={id}
							id={id}
							company={company}
							logo={logo}
							new={isNew}
							featured={featured}
							position={position}
							role={role}
							level={level}
							postedAt={postedAt}
							contract={contract}
							location={location}
							languages={languages}
							tools={tools}
						/>
					)
				)}
			</Section>
		</Container>
	);
}

const Container = styled.div`
	background-color: var(--LightGrayishCyan1);
	min-height: 100svh;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-inline: auto;
	width: 100%;
	max-inline-size: 1110px;
`;
export default App;
