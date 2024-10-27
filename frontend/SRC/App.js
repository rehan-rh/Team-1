import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import Login from "./Components/LoginForm";
import Judge from "./Components/Judge";
import Register from "./Components/Registrar";
import Registrar from "./Components/Registrar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";
import JudiciaryInfo from "./Components/JudiciaryInfo";
import ChiefJustice from "./Components/ChiefJustice";
import FormerJudges from "./Components/FormerJudges";



const AppLayout = () => {
    
    return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    );
  };

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path : "/judge",
                element : <Judge/>
            },
            {
                path : "/registrar",
                element : <Register/>
            },
            {
                path :"/judge",
                element : <Judge/>
            },
            {
                path :"/registrar",
                element : <Registrar/>
            },
            {
                path :"/aboutus",
                element : <AboutUs/>
            },
            {
                path :"/judiciaryinfo",
                element : <JudiciaryInfo/>
            },
            {
                path :"/chiefjustice",
                element : <ChiefJustice/>
            },
            {
                path :"/formerjudges",
                element : <FormerJudges/>
            },


        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);