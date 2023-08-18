import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
const Tables = () => {
  const [data, setData] = useState('')
  console.log(data)
  const getUser = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2', {

      }
      );
      setData(response.data.data)
    } catch (error) {
      throw new Error('Login failed.');
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container className="mt--6" fluid>


      <Row>

        <Col xl="11" className="mx-auto">
          <Card>
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">User Details</h3>
                </div>

              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush " responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Avatar</th>

                </tr>
              </thead>
              <tbody>
                {data && data.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>
                      {user.avatar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Tables
