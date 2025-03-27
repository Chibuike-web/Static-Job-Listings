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
	location,
}: JobType) {
	return (
		<div key={id}>
			<h2>{position}</h2>
			<p>
				{company} - {location}
			</p>
		</div>
	);
}
