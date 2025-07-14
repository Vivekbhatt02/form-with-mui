import {createBrowserRouter} from "react-router-dom";
import PageLayout from "./PageLayout";
import UserForm from "../components/form/UserForm";
import HistoryPanel from "../components/HistoryPanel";
import About from "../components/About";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        children: [
            {
                path: '/',
                element: <UserForm/>
            },
            {
                path: 'history',
                element: <HistoryPanel/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    }
]);

export default router;