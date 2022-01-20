import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
import routes from "./routes";
const Header = lazy(() => import("./components/Header"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <div className={styles.App}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={routes.generate} component={null} />
            <Route path={routes.pricing} component={null} />
            <Route path={routes.about} component={null} />
            <Route path={routes.profile} component={null} />
            <Route path={routes.dashboard} component={null} />
            <Route path={routes.main} component={null} />
            <Route path="*" element={<Navigate to={routes.main} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
