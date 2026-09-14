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
          <div className="logo-circle">
            🎓
          </div>

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
    <div className="app">
      <h1>Welcome to ADS Learn Academy</h1>
    </div>
  );
}

export default App;
