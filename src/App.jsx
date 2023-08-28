import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Creatures from "./creatures/components/Creatures";
import { Container } from "react-bootstrap";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
      <Container>
        <h1 className="mb-5 text-decoration-underline">Elden Ring Creatures</h1>
				<Creatures />
			</Container>
		</QueryClientProvider>
	);
}

export default App;
