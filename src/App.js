import React from "react";
import { Routes, Route } from "react-router-dom";
import router from "./routers/routes";
import Layout from "./layouts/Layout/Layout";
const App = () => {
  return (
    <Routes>
      {router.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={
            <Layout>
              <item.component />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
