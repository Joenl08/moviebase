import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
const Home = lazy( () => import("./pages/Home"));
const Movies = lazy( () => import("./pages/Movies"));
const Search = lazy( () => import("./pages/Search"));
const NotFound = lazy( () => import("./pages/NotFound"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
