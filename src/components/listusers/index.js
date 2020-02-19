import React from "react";
import Button from "reactstrap/lib/Button";
import {InputGroupAddon} from "reactstrap";
import useGlobal from "../../store";

const ListUsers = () => {
    const [globalState, globalActions] = useGlobal();
    const click = () => {
        globalActions.user.getUsers();
    };
    return (
        <>
            <Button color="primary" onClick={click} size="lg" block>List All Users</Button>
        </>
    );
};
export default ListUsers;