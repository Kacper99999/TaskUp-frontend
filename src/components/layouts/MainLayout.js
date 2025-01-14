import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "../appbar";
import { Suspense } from "react";
import css from "./MainLayout.module.css";

export const MainLayout = () => {
    return(
        <div style={{ margin:'0 auto', padding:'0 16px'}}>
            <AppBar/>
            <Suspense>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false}/>
        </div>
    )
}