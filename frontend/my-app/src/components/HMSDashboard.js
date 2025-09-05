import React from 'react';
import './HMSDashboard.css';

const HMSDashboard = () => {
  const dashboardData = {
    stats: {
      totalPatients: 1244,
      todayAppointments: 48,
      availableBeds: 32,
      staffOnDuty: 28
    },
    recentAppointments: [
      { id: 1, patient: 'Rajesh Kumar', doctor: 'Dr. Sharma', time: '10:00 AM', status: 'Scheduled' },
      { id: 2, patient: 'Priya Singh', doctor: 'Dr. Patel', time: '10:30 AM', status: 'In Progress' },
      { id: 3, patient: 'Amit Verma', doctor: 'Dr. Desai', time: '11:00 AM', status: 'Scheduled' }
    ]
  };

  return (
    <div className="hms-dashboard">
      <header className="dashboard-header">
        <h1>Hospital Management System Dashboard</h1>
        <div className="header-actions">
          <button className="btn-primary">New Appointment</button>
          <button className="btn-secondary">Generate Report</button>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon patients">👨‍⚕️</div>
          <div className="stat-info">
            <h3>{dashboardData.stats.totalPatients.toLocaleString()}</h3>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon appointments">📅</div>
          <div className="stat-info">
            <h3>{dashboardData.stats.todayAppointments}</h3>
            <p>Today's Appointments</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon beds">🛏️</div>
          <div className="stat-info">
            <h3>{dashboardData.stats.availableBeds}</h3>
            <p>Available Beds</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon staff">👨‍⚕️</div>
          <div className="stat-info">
            <h3>{dashboardData.stats.staffOnDuty}</h3>
            <p>Staff on Duty</p>
          </div>
        </div>
      </div>

      <div className="appointments-section">
        <h2>Today's Appointments</h2>
        <div className="appointments-list">
          {dashboardData.recentAppointments.map(appointment => (
            <div key={appointment.id} className="appointment-item">
              <div className="appointment-time">{appointment.time}</div>
              <div className="appointment-details">
                <h4>{appointment.patient}</h4>
                <p>With {appointment.doctor}</p>
              </div>
              <div className={`appointment-status ${appointment.status.toLowerCase().replace(' ', '-')}`}>
                {appointment.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HMSDashboard;