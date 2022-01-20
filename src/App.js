import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
import routes from "./routes";
const Header = lazy(() => import("./components/Header"));
const SignIn = lazy(() => import("./pages/public/SignIn"));
const SignUp = lazy(() => import("./pages/public/SignUp"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <div className={styles.App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={routes.signin} element={<SignIn />} />
            <Route path={routes.signup} element={<SignUp />} />
            <Route path={routes.generate} element={null} />
            <Route path={routes.pricing} element={null} />
            <Route path={routes.about} element={null} />
            <Route path={routes.profile} element={null} />
            <Route path={routes.dashboard} element={null} />
            <Route path="*" element={<Navigate to={routes.signin} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
