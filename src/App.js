import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Home from "./components/home";
import {Container} from "reactstrap";
import useGlobal from "./store";
import LoadingOverlay from "react-loading-overlay";
import {BeatLoader} from "react-spinners";

function App() {
    const [globalState, globalActions] = useGlobal();
    return (
        <LoadingOverlay
            active={globalState.status == "LOADING"}
            spinner={<BeatLoader/>}
            text=''
        >
            <Container>
                <Switch>
                    <Route path="/" name="Home" component={Home}></Route>
                </Switch>
            </Container>
        </LoadingOverlay>
    );
}

export default App;
