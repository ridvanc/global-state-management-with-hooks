import React from "react";
import {Col, InputGroup} from "reactstrap";
import Increase from "./increase";
import Decrease from "./decrease";
import Counter from "./counter";

const Main = () => {
    return (
        <Col lg={2} sm={4} xs={4} >
            <InputGroup>
                <Decrease/>
                <Counter/>
                <Increase/>
            </InputGroup>
        </Col>
    );
};

export default Main;