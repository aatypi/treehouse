// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5
              className="text-uppercase d-inline"
              style={{ fontFamily: "IBM Plex Sans Condensed sans-serif" }}
            >
              Prata med oss
            </h5>
            <FontAwesomeIcon icon={faComment} className="faComment" size="2x" />
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="faEnvelope"
                size="2x"
              />
              <span
                className="mail"
                style={{ fontFamily: "IBM Plex Sans Condensed sans-serif" }}
              >
                climate@change.com
              </span>
              <br />
            </p>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0 ">
            <h6
              className=".small"
              style={{
                fontFamily: "IBM Plex Sans Condensed sans-serif",
                fontSize: "1rem",
              }}
            >
              Grupp 10 <br />
              Högskolan Borås
            </h6>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <p
              className=""
              style={{
                fontFamily: "IBM Plex Sans Condensed sans-serif",
                fontSize: "1rem",
              }}
            >
              På sociala media
            </p>
            <a target="_blank" href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-Icon faFacebook"
                size="2x"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className="social-Icon faInstagram"
                size="2x"
              />
            </a>
            <a target="_blank" href="https://www.twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="social-Icon faTwitter"
                size="2x"
              />
            </a>
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Grupp 10
      </div>
    </MDBFooter>
  );
};

// export const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="left-footer">
//             {" "}
//             Prata med oss
//             <br />
//             climate@change.com
//             <br />
//           </Col>
//           <Col className="center-footer">
//             <div
//               class="text-center p-3"
//               style="background-color: rgba(0, 0, 0, 0.2);"
//             >
//               © 2020 Copyright:
//               <a class="text-white" href="https://mdbootstrap.com/">
//                 MDBootstrap.com
//               </a>
//             </div>
//           </Col>
//           <Col className="right-footer">
//             {" "}
//             {/* <Logo style={{ fontFamily: "Permanent Marker", fontSize: "1rem" }} /> */}
//             <p>on sociala media</p>
//             <FontAwesomeIcon icon={faFacebookSquare} />
//             <FontAwesomeIcon icon={faFacebookSquare} />
//             <FontAwesomeIcon icon={faFacebookSquare} />
//             <br />
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };
