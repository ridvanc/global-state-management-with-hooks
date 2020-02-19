import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../actions";


const initialState = {
    count: {
        totalcount: 0
    },
    status: "INITIAL",
    users: {
        data: []
    }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;