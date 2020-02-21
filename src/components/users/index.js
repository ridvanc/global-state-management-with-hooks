import React from "react";
import {Table, Media, Button} from "reactstrap";
import {Link} from "react-router-dom";
import useGlobal from "../../store";

const usersTable = users => {
    return (<Table striped={true}>
            <thead>
            <tr>
                <th>#</th>
                <th>Picture</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                users.filtered.map(user => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>
                            <Media object src={user.avatar} width={50}
                                   alt="Generic placeholder image"/>
                        </td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>
                            <Button tag={Link} outline color="primary"
                                    to={`/users/${user.id}`}
                            >Edit</Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};
const Users = () => {
    const [globalState, globalActions] = useGlobal();
    const {status,users} = globalState;
    return (
        <>
            {status === "LOADING" && <h4>Loading...</h4>}
            {status === "SUCCESS" && usersTable(users)}
            {status === "EMPTY" && <h4>This user have zero repos</h4>}
            {status === "NOT_FOUND" && <h4>404 - User not found</h4>}
            {status === "ERROR" && <h4>Connection Error</h4>}
        </>

    );
};

export default Users;