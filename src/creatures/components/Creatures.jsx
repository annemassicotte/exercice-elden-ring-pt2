import React from "react";
import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../service/CreaturesService";

const creaturesService = new CreaturesService();

const Creatures = () => {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ["creatures"],
		queryFn: () => creaturesService.getCreatures(),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{error.message}</div>;

	return (
		<div>
			{data &&
				data.map((creature) => {
					return (
						<div key={creature.id}>
							<h2>{creature.name}</h2>
							<p>{creature.description}</p>
						</div>
					);
				})}
		</div>
	);
};

export default Creatures;
