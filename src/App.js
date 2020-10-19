import React from 'react';
import './App.css';
import TeacherDashboard from './components/Dashboards/TeacherDasboard';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <h1>We can now deploy our app</h1>
      <TeacherDashboard/>
      <Footer />
    </div>
  );
}
export default App;
