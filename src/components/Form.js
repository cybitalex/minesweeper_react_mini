import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    userName: ''
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setAccount({
        ...account,
        [event.target.name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
//   console.log(account)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body onSubmit={handleSubmit}>
            <Form.Control size="sm" type="text" placeholder="Enter Your First Name" name="firstName" value={account.firstName} onChange={handleChange} />
            <br />
            <Form.Control size="sm" type="text" placeholder="Enter Your Last Name" name="lastName" value={account.lastName} onChange={handleChange}/>
            <br />
            <Form.Control size="sm" type="text" placeholder="Enter a Username" name="userName" value={account.userName} onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" value="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
