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
        public: false,
        name: "Error",
        path: "*",
        element: <Error />
    },
    Home: {
        public: true,
        name: "Home",
        path: '/',
        element: <Home />
    },
    MyResume: {
        public: true,
        name: "My Resume",
        path: '/my-resume',
        element: <MyResume />
    },
    AboutPage: {
        public: true,
        name: "About Us",
        path: '/about-us',
        element: <AboutUs />
    },
    FillDetails: {
        public: false,
        name: "Fill Details",
        path: '/template/fill-details',
        element: <FillDetails />
    },   
    GeneratedResume: {
        public: false,
        name: "Generated Resume",
        path: '/template/generated-resume',
        element: <GeneratedResume />
    }
};