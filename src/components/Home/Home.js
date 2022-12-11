import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";
import Contact from "../Contact/Contact";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// https://prnt.sc/cyQVqyS94HKp
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Omar Faruk</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 50, paddingTop: 15, textAlign: "left" }}>
                
                <Button
                  variant="primary"
                  style={{ marginLeft: "0" }}
                >
                  Resume <BsFillArrowRightCircleFill />
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects />
      <About />
      <Home2 />
      <Contact />
    </section>
  );
}

export default Home;
