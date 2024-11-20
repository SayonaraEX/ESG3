import React, { useState } from "react";
import Header from "../../components/Student/Header.jsx";
import Sidebar from "../../components/Student/Sidebar.jsx";
import StudentInfo from "../../components/Student/StudentInfo.jsx";
import EnrollmentDetails from "../../components/Student/EnrollmentDetails.jsx";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("StudentInfo");

  const renderContent = () => {
    if (activeSection === "StudentInfo") {
      return <StudentInfo />;
    } else if (activeSection === "EnrollmentDetails") {
      return <EnrollmentDetails />;
    }
    return <p>Select a section from the sidebar.</p>;
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="dashboard-main">{renderContent()}</main>
      </div>
    </div>
  );
};

export default StudentDashboard;