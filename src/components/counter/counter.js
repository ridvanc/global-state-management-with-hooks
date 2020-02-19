import React from "react";
import useGlobal from "../../store";
import {Alert, Input} from "reactstrap";

const Counter = () => {
    const [globalState, globalActions] = useGlobal();
    const {count} = globalState;

    return (
        <>
            <Input className="text-center" disabled value={count.totalcount}/>
        </>
    );
};

export default Counter;