import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import useGlobal from "./store";
import LoadingOverlay from "react-loading-overlay";
import {BeatLoader} from "react-spinners";
import Header from "./common/header";

const UserManagement = React.lazy(() => import('./components/usermanagement/usermanagement'));
const Home = React.lazy(() => import('./components/home'));

function App() {
    const [globalState, globalActions] = useGlobal();
    return (
        <LoadingOverlay
            active={globalState.status == "LOADING"}
            spinner={<BeatLoader/>}
            text=''
        >
            <Container fluid={true}>
                <Header/>
                <React.Suspense fallback={<span>Loading</span>}>
                    <Switch>
                        <Route path="/users">
                            <UserManagement/>
                        </Route>
                        <Route path="/" exact name="Home">
                            <Home/>
                        </Route>
                    </Switch>
                </React.Suspense>
            </Container>
        </LoadingOverlay>
    );
}

export default App;
