import React from "react";
import useGlobal from "../../store";
import {Button, InputGroup, InputGroupAddon} from "reactstrap";

const Decrease = () => {
    const [globalState, globalActions] = useGlobal();
    const click = () => {
        globalActions.counter.decrease();
    };
    return (
        <InputGroupAddon addonType="prepend">
            <Button onClick={click} color="danger">-</Button>
        </InputGroupAddon>
    );
};

export default Decrease;