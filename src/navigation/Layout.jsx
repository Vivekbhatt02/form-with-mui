import React from 'react';
import NavigationBar from "./NavigationBar";
import {Outlet} from "react-router-dom";

export default function Layout() {

    return (
        <>
            <NavigationBar/>
            <Outlet/>
        </>
    )
}
