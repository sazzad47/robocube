import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "../Layouts/index";

//routes
import { routes } from "./allRoutes";


const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {routes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                    <Layout>{route.component}</Layout>
                                }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Index;