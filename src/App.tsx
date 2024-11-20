import { BrowserRouter } from "react-router-dom";
import MainRouter from "./lib/router/MainRouter";
import "./index.css";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>{MainRouter}</BrowserRouter>;
		</QueryClientProvider>
	);
}

export default App;
