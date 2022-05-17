import { lazy, Suspense } from "react";
import { GlobalSyle } from "./globalStyles";
// use lazy to import all components

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalSyle />

        <Header />
        <Home />
        <Footer />
        <ScollToTop />
      </Suspense>
    </>
  );
}

export default App;
