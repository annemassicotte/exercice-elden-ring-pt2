import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CreaturesService from "../../service/CreaturesService";
import { Link } from "react-router-dom";

const creaturesService = new CreaturesService();

const Creature = () => {
	const params = useParams();

	const { isLoading, isError, error, data } = useQuery({
		queryKey: ["creature", params.id],
		queryFn: () => creaturesService.getCreature(params.id),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{error.message}</div>;

	return (
		<div>
			<Link to="/" className="mb-4 d-block">
				Back to Creatures
			</Link>
			{data && (
				<div key={data.id}>
					<h1 className="mb-5">{data.name}</h1>
					<img src={data.image} alt={data.name} className="mb-5" />
					<div className="mb-2">
						<h2>Description</h2>
						<p>{data.description}</p>
					</div>
					<div className="mb-2">
						<h2>Location</h2>
						<p>{data.location}</p>
					</div>
					<div className="mb-2">
						<h2>Drops</h2>
						<ul>
							{data.drops &&
								data.drops.map((drop) => (
									<li key={drop}>
										<p className="mb-0">{drop}</p>
									</li>
								))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Creature;
