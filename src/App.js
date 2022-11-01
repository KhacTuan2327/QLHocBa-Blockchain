import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import router from "./routers/routes";
import Layout from "./layouts/Layout/Layout";
const App = () => {
  return (
    <Routes>
      {router.map((item, index) => {
        const DefaultLayout = item.layout ? Layout : Fragment
        return (
          < Route
            key={index}
            path={item.path}
            element={
              <DefaultLayout >
                <item.component />
              </DefaultLayout>
            }
          />
        )
      })}
    </Routes>
  );
};

export default App;
