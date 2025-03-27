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
		</Container>
	);
}

const Container = styled.div`
	background-color: var(--LightGrayishCyan) s;
`;

export default App;
