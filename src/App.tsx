import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function AppContent() {
  return (
    <>
      Hello World!
    </>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <QueryClientProvider client={queryClient}>

            <AppContent />

          </QueryClientProvider>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
}
