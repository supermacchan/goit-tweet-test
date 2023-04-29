import { lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from "./Routes/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import Layout from "./Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TweetsPage = lazy(() => import("../pages/tweets/TweetsPage"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={
            <PrivateRoute component={TweetsPage} redirectTo="/"/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;