import "./globals.css";
import Header from "./components/Header";
import Joblist from "./components/Joblist";
import { useJobStore } from "./store/useJobStore";
import { JobType } from "./store/useJobStore";
import styled from "styled-components";

function App() {
	const { jobs, setJobs } = useJobStore();
	const handleClick = (filterType: "role" | "level" | "tool" | "language", value: string) => {
		const newJobLists = jobs.filter((job) => {
			if (filterType === "role") return job.role === value;
			if (filterType === "level") return job.level === value;
			if (filterType === "tool") return job.tools?.includes(value);
			if (filterType === "language") return job.languages?.includes(value);
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
						isNew,
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
							isNew={isNew}
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
