import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <div className="logo-circle">🎓</div>

          <h1>
            ADS <span>Learn</span>
          </h1>

          <h2>Academy</h2>

          <p>Learn, Grow, Success</p>

          <div className="loading">
            <span></span>
          </div>
        </div>

        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>
      </div>
    );
  }

  return (
    <main className="welcome-page">
      <div className="welcome-logo">🎓</div>

      <h1>
        Welcome to <br />
        <span>ADS Learn Academy</span>
      </h1>

      <p className="welcome-text">
        Learn smarter, practice better,
        <br />
        and achieve your goals.
      </p>

      <div className="board-buttons">
        <button className="board-card">
          <strong>CBSE</strong>
          <small>Central Board</small>
        </button>

        <button className="board-card">
          <strong>BSEB</strong>
          <small>Bihar Board</small>
        </button>
      </div>

      <button className="get-started">
        Get Started
        <span>→</span>
      </button>

      <p className="login-text">
        Already have an account? <b>Login</b>
      </p>
    </main>
  );
}

export default App;
