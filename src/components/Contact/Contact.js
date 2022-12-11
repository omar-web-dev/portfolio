import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function FormDisabledInputExample() {
    const [result, setResult] = useState()
    const [error, setError] = useState()
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xwnj9xd', 'template_s91u0a9', form.current, 'zxccTyM-s7us2qKow')
      .then((result) => {
        setResult(result.text)
       alert("send your massage")

      }, (error) => {
        setError(error.text)
          console.log(error.text);
      });
  };

    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <Form  ref={form} onSubmit={sendEmail}>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text>Name</InputGroup.Text>
                                <Form.Control type="text" aria-label="name" name="user_name" />
                            </InputGroup>

                            <InputGroup className='mb-3'>
                                <InputGroup.Text>Email address</InputGroup.Text>
                                <Form.Control type="email" aria-label="Email address" name="user_email"/>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text>Your Massage</InputGroup.Text>
                                <Form.Control as="textarea" name="message" aria-label="With textarea" />
                            </InputGroup>
                            {error && <p className='text-red'>{error}</p>}
                            <Button variant="primary mt-3 px-5" type="submit">
                                Send
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default FormDisabledInputExample;

