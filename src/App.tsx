import "./globals.css";
import Header from "./components/Header";
import Joblist from "./components/Joblist";
import { useJobStore } from "./store/useJobStore";
import { JobType } from "./store/useJobStore";
import { useState } from "react";
import styled from "styled-components";
import Remove from "./assets/icon-remove.svg";

function App() {
	const { jobs: allJobs } = useJobStore();
	const [filteredJobs, setFilteredJobs] = useState<JobType[]>(allJobs);
	const [activeFilters, setActiveFilters] = useState<{ type: string; value: string }[]>([]);

	const handleClick = (filterType: "role" | "level" | "tool" | "language", value: string) => {
		if (
			activeFilters.some(
				(activeFilter) => activeFilter.type === filterType && activeFilter.value === value
			)
		)
			return;

		const newFilters = [...activeFilters, { type: filterType, value }];
		setActiveFilters(newFilters);
		console.log(newFilters);

		const newJobLists = allJobs.filter((job) =>
			newFilters.every(({ type, value }) => {
				if (type === "role") return job.role === value;
				if (type === "level") return job.level === value;
				if (type === "tool") return job.tools?.includes(value);
				if (type === "language") return job.languages?.includes(value);
				return false;
			})
		);

		setFilteredJobs(newJobLists);
	};

	const removeFilter = (filterType: string, value: string) => {
		const updatedList = activeFilters.filter(
			(activeFilter) => !(activeFilter.type === filterType && activeFilter.value === value)
		);
		setActiveFilters(updatedList);
		const newJobLists = allJobs.filter((job) =>
			updatedList.every(({ type, value }) => {
				if (type === "role") return job.role === value;
				if (type === "level") return job.level === value;
				if (type === "tool") return job.tools?.includes(value);
				if (type === "language") return job.languages?.includes(value);
				return false;
			})
		);

		setFilteredJobs(newJobLists);
	};

	return (
		<Container>
			<Header />

			<Section>
				<>
					{activeFilters.length > 0 && (
						<FilterLists>
							<ListWrapper>
								{activeFilters.map(({ type, value }) => (
									<List key={`${type}-${value}`}>
										<span>{value}</span>
										<Button type="button" onClick={() => removeFilter(type, value)}>
											<img src={Remove} alt="Remove Icon Button" />
										</Button>
									</List>
								))}
							</ListWrapper>

							<ClearButton
								onClick={() => {
									setActiveFilters([]);
									setFilteredJobs(allJobs);
								}}
							>
								Clear
							</ClearButton>
						</FilterLists>
					)}
					{filteredJobs.map(
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
				</>
			</Section>
		</Container>
	);
}

const Container = styled.div`
	background-color: var(--LightGrayishCyan1);
	min-height: 100svh;
	position: relative;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-inline: auto;
	width: 100%;
	max-inline-size: 1110px;
	position: relative;

	@media (max-width: 900px) {
		padding-inline: 1.5rem;
		gap: 2.5rem;
	}
`;

const FilterLists = styled.div`
	display: flex;
	background-color: white;
	padding: 24px;
	align-items: center;
	justify-content: space-between;
	z-index: 100;
	width: 100%;
	border-radius: 0.5rem;
	margin-top: -110px;
`;

const ListWrapper = styled.ul`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
`;

const List = styled.li`
	background-color: var(--LightGrayishCyan1);
	display: flex;
	align-items: center;
	overflow: hidden;
	border-radius: 4px;
	span {
		padding-inline: 10px;
		padding-block: 8px;
		color: var(--DesaturatedDarkCyan);
		font-weight: 700;
	}
`;
const Button = styled.button`
	background-color: var(--DesaturatedDarkCyan);
	display: flex;
	align-items: center;
	padding-inline: 10px;
	padding-block: 8px;
`;

const ClearButton = styled.button`
	font-weight: 600;
	cursor: pointer;
`;

export default App;
