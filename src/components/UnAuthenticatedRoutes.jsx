import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

function UnAuthenticatedRoutes() {
  const SignUpPage = lazy(() => import("../pages/SignUpPage"));
  const LoginPage = lazy(() => import("../pages/LoginPage"));
  

  return (
    <Suspense fallback={<p></p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default UnAuthenticatedRoutes;
