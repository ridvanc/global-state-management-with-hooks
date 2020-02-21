import React, {useEffect, useState} from "react";
import Button from "reactstrap/lib/Button";
import {FormGroup, Label, Col, Input, Row} from "reactstrap";
import useGlobal from "../../store";

const ListUsers = () => {
    const [globalState, globalActions] = useGlobal();
    const [nameSurname, setNameSurname] = useState("");
    const click = (event) => {
        globalActions.user.filterUsers(nameSurname);
    };
    const handleChange = (event) => {
        setNameSurname(event.target.value);
    };
    useEffect(() => {
        globalActions.user.getUsers();
    }, []);
    return (
        <>
            <Row lg={12} sm={12} md={12} xl={12} xs={12}>
                <Col lg={12} sm={12} md={12} xl={12} xs={12}>
                    <FormGroup>
                        <Label for="namesurname">Name Surname</Label>
                        <Input type="text" value={nameSurname} onChange={handleChange}
                               placeholder="Name Surname"/>
                    </FormGroup>
                </Col>
            </Row>
            <Button color="primary" onClick={(event) => click(event)} size="lg" block>List All Users</Button>
        </>
    );
};
export default ListUsers;