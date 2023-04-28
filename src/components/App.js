import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TweetsPage = lazy(() => import("../pages/tweets/TweetsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<TweetsPage />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
