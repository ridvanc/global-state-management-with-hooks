import React from "react";
import {Row, Col} from "reactstrap";
import ListUsers from "../listusers";
import Users from "../users";

const UserManagement = () => {
    return (
        <>
            <h2 className="text-center">User Management</h2>
            <hr/>
            <Row lg={12} sm={12} md={12} xl={12} xs={12}>
                <Col lg={3} sm={4} md={3} xl={3} xs={12}>
                    <ListUsers/>
                </Col>
                <Col lg={9} sm={8} md={9} xl={9} xs={12}>
                    <Users/>
                </Col>
            </Row>
        </>
    );
};

export default UserManagement;