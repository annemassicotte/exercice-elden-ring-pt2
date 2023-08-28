import { config } from "../../config";

class CreaturesService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;
    creaturesUrl = `${this.baseUrl}${this.endpoint}`;

    async getCreatures() {
        const res = await fetch(this.creaturesUrl);
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
        const data = await res.json();
        return data.data;
    }
}

export default CreaturesService;
