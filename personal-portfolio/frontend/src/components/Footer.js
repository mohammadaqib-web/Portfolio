import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-5 pb-0">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={12} className="text-center text-sm-center">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
              <a href="https://www.linkedin.com/in/mohammad-aqib-687ab5263/" target="_blank" style={{textDecoration:"none"}}><i className="fa-brands fa-linkedin text-light"></i></a>
                <a href="https://github.com/mohammadaqib-web" target="_blank" style={{textDecoration:"none"}}><i className="fa-brands fa-github text-light"></i></a>
                <a href="https://www.instagram.com/mohammad_.aqib/" target="_blank" style={{textDecoration:"none"}}><i className="fa-brands fa-instagram text-light"></i></a>
            </div>
            <p><i className="fa-regular fa-copyright"></i> 2024 Mohammad Aqib. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
