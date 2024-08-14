import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "reactstrap";
import {
  FaDollarSign,
  FaUsers,
  FaUserCheck,
  FaRegListAlt,
} from "react-icons/fa";
import "./Dashboard.css";
import { getTrainerDasboard } from "Api/Api";

const Dashboard = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const fetchTrainerDashboard = async () => {
      const response = await getTrainerDasboard();
      console.log(response, "dashboard response----->");
      setInfo(response?.data);
    };
    fetchTrainerDashboard();
  }, []);
  return (
    <div className="pt-5 pt-md-8 mb-3 p-3">
      <div className="dashboard-cards">
        <Row>
          <Col xl={4}>
            <Card className="card-shadow subscriber-cards mt-4 dashboard-card">
              <div className="text-center p-3">
                <FaDollarSign className="dashboard-icon" />
                <h1 className="mt-2">Total Revenue</h1>
                <h3 className="dashboard-card-detail">${info?.balance}</h3>
              </div>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="card-shadow subscriber-cards mt-4 dashboard-card">
              <div className="text-center p-3">
                <FaUsers className="dashboard-icon" />
                <h1 className="mt-2">Total Clients</h1>
                <h3 className="dashboard-card-detail">{info?.users}</h3>
              </div>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="card-shadow subscriber-cards mt-4 dashboard-card">
              <div className="text-center p-3">
                <FaUserCheck className="dashboard-icon" />
                <h1 className="mt-2">Active Clients</h1>
                <h3 className="dashboard-card-detail">{info?.users}</h3>
              </div>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="card-shadow subscriber-cards mt-4 dashboard-card">
              <div className="text-center p-3">
                <FaRegListAlt className="dashboard-icon" />
                <h1 className="mt-2">Total Subscriptions</h1>
                <h3 className="dashboard-card-detail">{info?.users}</h3>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
