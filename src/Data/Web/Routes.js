/**
 * This module give us a single location for altering any
 * route in the entire application at any point of 
 * time in the future.
 * 
 * @var const Object Web
 */
export const Web = {
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
        path: 'about-us',
        element: <></>
    },
    Templates: {
        name: "Templates",
        path: 'templates',
        element: <></>
    },
    GeneratedResume: {
        name: "Generate Resume",
        path: 'template/resume',
        element: <></>
    },
    FillDetails: {
        name: "Fill Details",
        path: 'template/fill-details',
        element: <></>
    }
};