import React from "react";
import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../../service/CreaturesService";
import { Link } from "react-router-dom";

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
			<h1 className="mb-5 text-decoration-underline">Elden Ring Creatures</h1>
			{data &&
				data.map((creature) => {
					return (
						<div key={creature.id}>
							<Link to={`/creature/${creature.id}`}>
								<h2>{creature.name}</h2>
							</Link>
							<p>{creature.description}</p>
						</div>
					);
				})}
		</div>
	);
};

export default Creatures;
