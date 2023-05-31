import Page from './Layouts/Page';
import { Web } from './Data/Web/Routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Here we register all of our web defined in the routes module. */}
                {Object.entries(Web).map(([name,props],index) => {
                    // Here: we will create new route with the stored 
                    // information in the web routes module.
                    return <Route 
                        extact
                        // Assign route
                        path={props.path ?? null} 
                        // Assign element 
                        element={<Page>
                            {props.element ?? (
                                // Fallback element incase route does not 
                                // have any valid element to show or
                                // specified in the web routes.
                                <>{name}</>
                            )}
                        </Page>} 
                    />;
                })}
            </Routes>
        </Router>
    )
};

export default App;