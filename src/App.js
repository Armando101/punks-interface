import { Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./views/home";

function App() {
  return (
    <MainLayout>
      <Route path="/" component={Home} />
    </MainLayout>
  );
}

export default App;
