import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import router from "./routers/routes";
import Layout from "./layouts/Layout/Layout";
import Auth from "./views/Auth/Login";
import ForgotPass from "./views/Auth/ForgotPass";
const App = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/forgot" element={<ForgotPass />} />
      {router.map((item, index) => {
        const DefaultLayout = item.layout ? Layout : Fragment;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <DefaultLayout>
                <item.component />
              </DefaultLayout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
