import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from "./Routes/PrivateRoute";
import { NotFoundPage } from "pages/NotFound/NotFoundPage";
import { ToastContainer } from 'react-toastify';
import Layout from "./Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import("../pages/home/HomePage"));
const TweetsPage = lazy(() => import("../pages/tweets/TweetsPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Page */}
          <Route index element={<HomePage />} />
          {/* Tweet Page */}
          <Route path="/tweets" element={
            <PrivateRoute component={TweetsPage} redirectTo="/"/>
          } />
          {/* 404 Not Found Page with delayed redirect */}
          <Route path="*" element={
            <NotFoundPage component={NotFound} redirectTo="/" />
          } />
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