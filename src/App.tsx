import "./globals.css";
import Header from "./components/Header";
import Joblist from "./components/Joblist";
import { useJobStore } from "./store/useJobStore";
import { JobType } from "./store/useJobStore";
import styled from "styled-components";

function App() {
	const { jobs, setJobs } = useJobStore();
	const handleClick = (
		jobRole: string,
		jobLevel: string,
		jobTool: string[],
		jobLanguage: string[]
	) => {
		const newJobLists = jobs.filter((job) => {
			if (
				job.role === jobRole ||
				job.level === jobLevel ||
				job.tools === jobTool ||
				job.languages === jobLanguage
			) {
				return true;
			}

			return false;
		});

		setJobs(newJobLists);
	};

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
							handleClick={handleClick}
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
	gap: 1.5rem;
	margin-inline: auto;
	width: 100%;
	max-inline-size: 1110px;

	@media (max-width: 900px) {
		padding-inline: 1.5rem;
		gap: 2.5rem;
	}
`;
export default App;
