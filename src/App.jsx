import { Suspense } from "react";
import "./App.css";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./components/UnAuthenticatedRoutes";

function App() {
  const token = ""
  return (
    <div className="App">
      <Suspense fallback={<p></p>}>
        {token ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </Suspense>
    </div>
  );
}

export default App;
