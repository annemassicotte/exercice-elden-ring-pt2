import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Creatures from "./creatures/components/Creatures/Creatures";
import Creature from "./creatures/components/Creature/Creature";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Container>
				<Routes>
					<Route path="/" element={<Creatures />} />
					<Route path="/creature/:id" element={<Creature />} />
				</Routes>
			</Container>
		</QueryClientProvider>
	);
}

export default App;
