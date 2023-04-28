import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TweetsPage = lazy(() => import("../pages/tweets/TweetsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
