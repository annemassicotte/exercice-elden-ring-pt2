import { config } from "../../config";

class CreaturesService {
	endpointCreatures = "creatures";
	endpointCreature = "creatures/";
	baseUrl = config.baseUrl;
	creaturesUrl = `${this.baseUrl}${this.endpointCreatures}`;
	creatureUrl = `${this.baseUrl}${this.endpointCreature}`;

	async getCreatures() {
		const res = await fetch(this.creaturesUrl);
		if (!res.ok) {
			throw new Error("Something went wrong");
		}
		const data = await res.json();
		return data.data;
	}

	async getCreature(id) {
		const url = `${this.creatureUrl}${id}`;
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Something went wrong");
		}
		const data = await res.json();
		return data.data;
	}
}

export default CreaturesService;
