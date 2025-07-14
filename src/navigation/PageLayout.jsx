import React from 'react';
import NavigationBar from "./NavigationBar";
import {Outlet} from "react-router-dom";

export default function PageLayout() {

    return (
        <>
            <NavigationBar/>
            <Outlet/>
        </>
    )
}
