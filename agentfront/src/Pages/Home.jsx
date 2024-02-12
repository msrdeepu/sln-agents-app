import React from "react";
import "../styles/home.css";
import { Row, Col, Statistic } from "antd";
import CountUp from "react-countup";
import { FaRupeeSign } from "react-icons/fa";
const Home = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className="home-main-container">
      <Row className="cards-container-home" gutter={[8, 4]}>
        <Col xs={24} md={12} className="home-data-container">
          <FaRupeeSign className="home-rs-icon" />
          <p>Month Commission</p>
          <Statistic value={112893} precision={2} formatter={formatter} />
        </Col>

        <Col
          xs={24}
          md={12}
          className="home-data-container home-data-container-two"
        >
          <FaRupeeSign className="home-rs-icon" />
          <p>Month Insentive</p>

          <Statistic value={112893} precision={2} formatter={formatter} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
