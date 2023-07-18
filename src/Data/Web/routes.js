import Home from "./../../Pages/Home";
import Error from "./../../Pages/Error";
import AboutUs from "./../../Pages/AboutUs";
import FillDetails from "./../../Pages/FillDetails";
import GeneratedResume from "./../../Pages/GeneratedResume";

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