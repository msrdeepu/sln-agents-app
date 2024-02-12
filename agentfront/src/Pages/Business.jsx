import React from "react";
import "../styles/business.css";
import { Row, Col, Card } from "antd";

const Business = () => {
  let totalReceipts = 5;

  let receptsData = [
    { receiptNo: 1, receiptValue: 8000 },
    { receiptNo: 2, receiptValue: 5000 },
  ];
  return (
    <div className="business-main-container">
      <Card
        className="cards-container-business"
        title={`Total Recepts ${totalReceipts}`}
      >
        <ul className="business-receipts-ul">
          {receptsData.map((item, index) => (
            <li>
              <p>{`Receipt Number: ${item.receiptNo}`}</p>
              <p>{`Receipt Value : ${item.receiptValue}`}</p>
              <hr />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Business;
