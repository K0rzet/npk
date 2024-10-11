import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { routerData } from "./routes/routes.data";
import NotFoundPage from "./components/404/404";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              {routerData.items.map((item) => (
                <Route path={item.link} Component={item.component}>
                  {item.name}
                </Route>
              ))}
              <Route path="*" Component={NotFoundPage}></Route>
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
