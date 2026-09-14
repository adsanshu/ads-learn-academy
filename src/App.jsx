import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [page, setPage] = useState("splash");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage("welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (page === "splash") {
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

  if (page === "login") {
    return (
      <main className="login-page">
        <button
          className="back-button"
          onClick={() => setPage("welcome")}
        >
          ←
        </button>

        <div className="login-logo">🎓</div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to continue learning with ADS Learn Academy.
        </p>

        <form className="login-form">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="forgot-password">
            Forgot Password?
          </div>

          <button
            type="button"
            className="login-button"
            onClick={() => setPage("home")}
          >
            Login
          </button>

          <div className="or-divider">
            <span></span>
            OR
            <span></span>
          </div>

          <button type="button" className="google-button">
            <span>G</span>
            Continue with Google
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <b onClick={() => setPage("signup")}>
            Sign Up
          </b>
        </p>
      </main>
    );
  }

  if (page === "signup") {
    return (
      <main className="login-page">
        <button
          className="back-button"
          onClick={() => setPage("login")}
        >
          ←
        </button>

        <div className="login-logo">🎓</div>

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Join ADS Learn Academy and start learning.
        </p>

        <form className="login-form">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <button
            type="button"
            className="login-button"
            onClick={() => setPage("home")}
          >
            Create Account
          </button>
        </form>

        <p className="signup-text">
          Already have an account?{" "}
          <b onClick={() => setPage("login")}>
            Login
          </b>
        </p>
      </main>
    );
  }

  if (page === "home") {
    return (
      <main className="home-page">

        <header className="home-header">
          <div>
            <p className="small-greeting">Good Morning 👋</p>
            <h1>Hi, Student!</h1>
          </div>

          <button className="profile-button">
            👤
          </button>
        </header>

        <section className="welcome-card">
          <div>
            <p>Keep Learning</p>
            <h2>Build Your Future</h2>
            <span>Learn. Practice. Succeed.</span>
          </div>

          <div className="card-icon">🎓</div>
        </section>

        <h2 className="section-title">
          Choose Your Class
        </h2>

        <section className="class-grid">
          <button className="class-card">
            <span>10</span>
            <div>
              <strong>Class 10</strong>
              <small>CBSE / BSEB</small>
            </div>
          </button>

          <button className="class-card">
            <span>11</span>
            <div>
              <strong>Class 11</strong>
              <small>CBSE / BSEB</small>
            </div>
          </button>

          <button className="class-card">
            <span>12</span>
            <div>
              <strong>Class 12</strong>
              <small>CBSE / BSEB</small>
            </div>
          </button>
        </section>

        <h2 className="section-title">
          Quick Learning
        </h2>

        <section className="quick-grid">
          <button className="quick-card">
            <span>📚</span>
            <strong>Courses</strong>
            <small>Study lessons</small>
          </button>

          <button className="quick-card">
            <span>📝</span>
            <strong>Mock Tests</strong>
            <small>Test yourself</small>
          </button>

          <button className="quick-card">
            <span>📊</span>
            <strong>Results</strong>
            <small>Track progress</small>
          </button>

          <button className="quick-card">
            <span>👤</span>
            <strong>Profile</strong>
            <small>Your account</small>
          </button>
        </section>

        <nav className="bottom-nav">
          <button className="active-nav">
            🏠
            <small>Home</small>
          </button>

          <button>
            📚
            <small>Courses</small>
          </button>

          <button>
            📝
            <small>Tests</small>
          </button>

          <button>
            👤
            <small>Profile</small>
          </button>
        </nav>

      </main>
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

      <button
        className="get-started"
        onClick={() => setPage("login")}
      >
        Get Started
        <span>→</span>
      </button>

      <p className="login-text">
        Already have an account?{" "}
        <b onClick={() => setPage("login")}>
          Login
        </b>
      </p>
    </main>
  );
}

export default App;
