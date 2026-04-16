import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <h1 className="profile-title">Profile Card</h1>
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">AR</div>
          </div>
          <div className="profile-content">
            <h2 className="profile-name">Arvind Rai</h2>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Age</span>
                <span className="info-value">20</span>
              </div>
              <div className="info-item">
                <span className="info-label">Course</span>
                <span className="info-value">BTech (CSE)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
