import React, { useCallback, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const RoutesHandler = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const paths = require.context("../pages", true, /.jsx$/).keys();
        const loadedRoutes = [];

        for (const path of paths) {
          let pathWithoutDotSlash = path.substring(2);
          let lastSlashIndex = pathWithoutDotSlash.lastIndexOf("/");
          const module = await import(`../pages${path.substring(1)}`);
          // this state is for when we have elements inside folder in pages
          if (lastSlashIndex !== -1) {
            let finalPath = pathWithoutDotSlash.substring(0, lastSlashIndex);
            if (path.includes("[id]")) {
              finalPath += "/:id";
            }
            if (finalPath === "home") {
              finalPath = "/";
            }
            loadedRoutes.push({
              path: finalPath,
              component: module.default,
            });
          }
          // this state is for when we have elements inside pages itself
          else {
            if (path.includes("notfound")) {
              loadedRoutes.push({ path: "*", component: module.default });
            }
          }
        }

        setRoutes(loadedRoutes);
      } catch (error) {
        console.error("Error fetching paths:", error);
      }
    };

    fetchPaths();
  }, []);

  if (!routes.length) {
    return;
  }
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.component && <route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RoutesHandler;
