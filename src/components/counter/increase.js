import React from "react";
import useGlobal from "../../store";
import {Button, InputGroupAddon} from "reactstrap";

const Increase = () => {
    const [globalState, globalActions] = useGlobal();
    const click = () => {
        globalActions.counter.increase();
    };
    return (
        <InputGroupAddon addonType="prepend">
            <Button onClick={click} color="success">+</Button>
        </InputGroupAddon>
    );
};

export default Increase;