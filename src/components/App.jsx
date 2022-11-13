import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ConvertValut from "pages/ConvertValut/ConvertValut";
import ActualConvertValut from "pages/ActualConvertValut/ActualConvertValut";
import Navigation from "./Navigation/Navigation";

// const ConvertValut = lazy(() => import("pages/HomePage/HomePage"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ConvertValut />} />
          <Route path="/actualConvertValut" element={<ActualConvertValut />} />
        </Route>
      </Routes>
    </div>
  )
};
