import Home from "./../../Pages/Home/Home";
import Error from "./../../Pages/Error/Error";
import AboutUs from "./../../Pages/AboutUs/AboutUs";
import MyResume from "./../../Pages/MyResume/MyResume";
import FillDetails from "./../../Pages/FillDetails/FillDetails";
import GeneratedResume from "./../../Pages/GeneratedResume/GeneratedResume";

/**
 * This module give us a single location for altering any
 * route in the entire application at any point of 
 * time in the future.
 * 
 * @var const Object routes
 */
export const routes = {
    Error: {
        name: "Error",
        path: "*",
        element: <Error />
    },
    Home: {
        name: "Home",
        path: '/',
        element: <Home />
    },
    AboutPage: {
        name: "About Us",
        path: '/about-us',
        element: <AboutUs />
    },
    MyResume: {
        name: "My Resume",
        path: '/my-resume',
        element: <MyResume />
    },
    FillDetails: {
        name: "Fill Details",
        path: '/template/fill-details',
        element: <FillDetails />
    },   
    GeneratedResume: {
        name: "Generated Resume",
        path: '/template/generated-resume',
        element: <GeneratedResume />
    }
};