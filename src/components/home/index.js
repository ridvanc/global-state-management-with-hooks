import React from "react";
import Main from "../counter/main";
import {Row, Table, Media, Button} from "reactstrap";
import {Link} from "react-router-dom";
import Users from "../users";
import ListUsers from "../listusers";

const Home = () => {
    return (
        <>
            <Row>
                <h1>Global State Management</h1>
            </Row>
            <Row>
                <Main/>
            </Row>
            <Row lg={12} sm={12} md={12} xl={12} xs={12}>
                <ListUsers/>
            </Row>
            <Row lg={12} sm={12} md={12} xl={12} xs={12}>
                <Users/>
            </Row>
        </>
    );
};

export default Home;