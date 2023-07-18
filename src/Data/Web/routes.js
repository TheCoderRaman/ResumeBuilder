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
        element: <></>
    },
    Home: {
        name: "Home",
        path: '/',
        element: <></>
    },
    AboutPage: {
        name: "About Us",
        path: '/about-us',
        element: <></>
    },
    FillDetails: {
        name: "Fill Details",
        path: '/template/fill-details',
        element: <></>
    },   
    GeneratedResume: {
        name: "Generated Resume",
        path: '/template/generated-resume',
        element: <></>
    }
};