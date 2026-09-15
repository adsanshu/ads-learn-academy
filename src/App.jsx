import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [page, setPage] = useState("splash");
   
  const [selectedClass, setSelectedClass] = useState("10");
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [selectedStream, setSelectedStream] = useState("");
  const [learningSection, setLearningSection] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);
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
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

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
          <b onClick={() => setPage("signup")}>Sign Up</b>
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
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

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
          <b onClick={() => setPage("login")}>Login</b>
        </p>
      </main>
    );
  }

  if (page === "courses") {
    return (
      <main className="courses-page">

        <header className="courses-header">
          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ←
          </button>

          <div>
            <p>ADS Learn Academy</p>
            <h1>My Courses</h1>
          </div>
        </header>

        <section className="class-selector">
  <button
    className={selectedClass === "10" ? "selected" : ""}
    onClick={() => {
      setSelectedClass("10");
      setSelectedStream("");
    }}
  >
    Class 10
  </button>

  <button
    className={selectedClass === "11" ? "selected" : ""}
    onClick={() => {
      setSelectedClass("11");
      setSelectedStream("");
    }}
  >
    Class 11
  </button>

  <button
    className={selectedClass === "12" ? "selected" : ""}
    onClick={() => {
      setSelectedClass("12");
      setSelectedStream("");
    }}
  >
    Class 12
  </button>
</section>
        {(selectedClass === "11" || selectedClass === "12") && (
  <section className="stream-selector">
    <h3>Select Stream</h3>

    <div className="stream-grid">
      <button
        className={selectedStream === "Science" ? "selected" : ""}
        onClick={() => setSelectedStream("Science")}
      >
        🔬
        <strong>Science</strong>
        <small>PCM / PCB</small>
      </button>

      <button
        className={selectedStream === "Commerce" ? "selected" : ""}
        onClick={() => setSelectedStream("Commerce")}
      >
        💼
        <strong>Commerce</strong>
        <small>Accounts & Business</small>
      </button>

      <button
        className={selectedStream === "Arts" ? "selected" : ""}
        onClick={() => setSelectedStream("Arts")}
      >
        🎨
        <strong>Arts / Humanities</strong>
        <small>History & Social Studies</small>
      </button>
    </div>
  </section>
)}

        <div className="course-heading">
          <div>
            <h2>Class {selectedClass}</h2>
            <p>CBSE / BSEB</p>
          </div>

          <span>📚</span>
        </div>
{selectedClass === "11" && selectedStream === "Science" && (
  <section className="subject-list">
    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Mathematics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🔢</div>
      <div className="subject-info">
        <h3>Mathematics</h3>
        <p>Algebra, Calculus & Practice</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Physics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">⚛️</div>
      <div className="subject-info">
        <h3>Physics</h3>
        <p>Concepts, formulas & numericals</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Chemistry");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🧪</div>
      <div className="subject-info">
        <h3>Chemistry</h3>
        <p>Organic, Inorganic & Physical Chemistry</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Biology");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🧬</div>
      <div className="subject-info">
        <h3>Biology</h3>
        <p>Botany, Zoology & Life Sciences</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>
  </section>
)}
        {selectedClass === "11" && selectedStream === "Commerce" && (
  <section className="subject-list">

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Accountancy");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📊</div>
      <div className="subject-info">
        <h3>Accountancy</h3>
        <p>Accounting concepts & practice</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Business Studies");
        setPage("subject");
      }}
    >
      <div className="subject-icon">💼</div>
      <div className="subject-info">
        <h3>Business Studies</h3>
        <p>Business, management & organization</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Economics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📈</div>
      <div className="subject-info">
        <h3>Economics</h3>
        <p>Microeconomics & economic concepts</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Mathematics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📐</div>
      <div className="subject-info">
        <h3>Mathematics</h3>
        <p>Algebra, statistics & practice</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

  </section>
)}
{selectedClass === "11" && selectedStream === "Arts" && (
  <section className="subject-list">

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("History");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🏛️</div>
      <div className="subject-info">
        <h3>History</h3>
        <p>Ancient, Medieval & Modern History</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Geography");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🌍</div>
      <div className="subject-info">
        <h3>Geography</h3>
        <p>Physical, Human & Indian Geography</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Political Science");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🏛️</div>
      <div className="subject-info">
        <h3>Political Science</h3>
        <p>Politics, Constitution & Government</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Economics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">💰</div>
      <div className="subject-info">
        <h3>Economics</h3>
        <p>Economic concepts & Indian economy</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

  </section>
)}
        {selectedClass === "12" && selectedStream === "Science" && (
  <section className="subject-list">

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Mathematics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🔢</div>
      <div className="subject-info">
        <h3>Mathematics</h3>
        <p>Algebra, Calculus & Practice</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Physics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">⚛️</div>
      <div className="subject-info">
        <h3>Physics</h3>
        <p>Concepts, formulas & numericals</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Chemistry");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🧪</div>
      <div className="subject-info">
        <h3>Chemistry</h3>
        <p>Organic, Inorganic & Physical Chemistry</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Biology");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🧬</div>
      <div className="subject-info">
        <h3>Biology</h3>
        <p>Botany, Zoology & Life Sciences</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

  </section>
)}
        {selectedClass === "12" && selectedStream === "Commerce" && (
  <section className="subject-list">

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Accountancy");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📊</div>
      <div className="subject-info">
        <h3>Accountancy</h3>
        <p>Accounting, Partnership & Company Accounts</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Business Studies");
        setPage("subject");
      }}
    >
      <div className="subject-icon">💼</div>
      <div className="subject-info">
        <h3>Business Studies</h3>
        <p>Management, Finance & Marketing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Economics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📈</div>
      <div className="subject-info">
        <h3>Economics</h3>
        <p>Microeconomics & Macroeconomics</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Mathematics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🔢</div>
      <div className="subject-info">
        <h3>Mathematics</h3>
        <p>Algebra, Calculus & Practice</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

  </section>
)}
        {selectedClass === "12" && selectedStream === "Arts" && (
  <section className="subject-list">

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("History");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🏛️</div>
      <div className="subject-info">
        <h3>History</h3>
        <p>Ancient, Medieval & Modern History</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Geography");
        setPage("subject");
      }}
    >
      <div className="subject-icon">🌍</div>
      <div className="subject-info">
        <h3>Geography</h3>
        <p>Physical, Human & Indian Geography</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Political Science");
        setPage("subject");
      }}
    >
      <div className="subject-icon">⚖️</div>
      <div className="subject-info">
        <h3>Political Science</h3>
        <p>Politics, Constitution & International Relations</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Economics");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📈</div>
      <div className="subject-info">
        <h3>Economics</h3>
        <p>Microeconomics & Macroeconomics</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("English");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📖</div>
      <div className="subject-info">
        <h3>English</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

    <button
      className="subject-card"
      onClick={() => {
        setSelectedSubject("Hindi");
        setPage("subject");
      }}
    >
      <div className="subject-icon">📝</div>
      <div className="subject-info">
        <h3>Hindi</h3>
        <p>Literature, Grammar & Writing</p>
        <div className="progress-bar">
          <span style={{ width: "0%" }}></span>
        </div>
        <small>0% completed</small>
      </div>
      <b>›</b>
    </button>

  </section>
)}
        
        {selectedClass === "10" && (
        <section className="subject-list">

          <button
  className="subject-card"
  onClick={() => {
    setSelectedSubject("Mathematics");
    setPage("subject");
  }}
>
  <div className="subject-icon">📐</div>

  <div className="subject-info">
    <h3>Mathematics</h3>
    <p>Learn concepts & solve problems</p>

    <div className="progress-bar">
      <span style={{ width: "65%" }}></span>
    </div>

    <small>65% completed</small>
  </div>

  <b>›</b>
</button>
          <button
  className="subject-card"
  onClick={() => {
    setSelectedSubject("Science");
    setPage("subject");
  }}
>
            <div className="subject-icon">🔬</div>
            <div className="subject-info">
              <h3>Science</h3>
              <p>Physics, Chemistry & Biology</p>
              <div className="progress-bar">
                <span style={{ width: "45%" }}></span>
              </div>
              <small>45% completed</small>
            </div>
            <b>›</b>
          </button>

          <button
  className="subject-card"
  onClick={() => {
    setSelectedSubject("Social Science");
    setPage("subject");
  }}
>
            <div className="subject-icon">🌍</div>
            <div className="subject-info">
              <h3>Social Science</h3>
              <p>History, Geography, Civics & Economics</p>
              <div className="progress-bar">
                <span style={{ width: "30%" }}></span>
              </div>
              <small>30% completed</small>
            </div>
            <b>›</b>
          </button>

          <button
  className="subject-card"
  onClick={() => {
    setSelectedSubject("English");
    setPage("subject");
  }}
>
            <div className="subject-icon">📖</div>
            <div className="subject-info">
              <h3>English</h3>
              <p>Grammar, Literature & Writing</p>
              <div className="progress-bar">
                <span style={{ width: "55%" }}></span>
              </div>
              <small>55% completed</small>
            </div>
            <b>›</b>
          </button>
<button
  className="subject-card"
  onClick={() => {
    setSelectedSubject("Hindi");
    setPage("subject");
  }}
>
  <div className="subject-icon">📝</div>

  <div className="subject-info">
    <h3>Hindi</h3>
    <p>Literature, Grammar & Writing</p>

    <div className="progress-bar">
      <span style={{ width: "40%" }}></span>
    </div>

    <small>40% completed</small>
  </div>

  <b>›</b>
</button>
        </section>
)}
      </main>
    );
  }
if (page === "subject") {
  return (
    <main className="subject-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("courses")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="subject-banner">
        <div>
          <span>📚</span>
          <h2>{selectedSubject}</h2>
          <p>
            Learn concepts, practice questions
            and complete your chapters.
          </p>
        </div>

        <div className="subject-progress">
          <strong>65%</strong>
          <small>Completed</small>
        </div>
      </section>
            <div className="learning-options">

        <button
  className="learning-card"
  onClick={() => {
    setLearningSection("study");
    setPage("learning");
  }}
>
  <span>📚</span>
  <div>
    <h3>Study Material</h3>
    <p>Learn chapter-wise concepts</p>
  </div>
  <b>›</b>
</button>

        <button className="learning-card">
          <span>📝</span>
          <div>
            <h3>Notes</h3>
            <p>Quick revision notes</p>
          </div>
          <b>›</b>
        </button>

        <button className="learning-card">
          <span>🧪</span>
          <div>
            <h3>Mock Test</h3>
            <p>Test your preparation</p>
          </div>
          <b>›</b>
        </button>

      </div>
       
    </main>
  );
}
  if (page === "learning") {
  return (
    <main className="learning-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("subject")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="learning-banner">
        <span>📚</span>
        <div>
          <h2>Study Material</h2>
          <p>Chapter-wise learning material</p>
        </div>
      </section>

      <section className="chapter-list">

        <button
  className="chapter-card"
  onClick={() => {
  setSelectedChapter(1);
  setPage("chapter");
}}
>
  <div className="chapter-number">01</div>
  <div>
    <h3>Chapter 1</h3>
<p>Introduction & Basic Concepts</p>
  </div>
  <span>›</span>
</button>
<button
  className="chapter-card"
  onClick={() => {
    setSelectedChapter(2);
    setPage("chapter");
  }}
>
  <div className="chapter-number">02</div>

  <div>
    <h3>Chapter 2</h3>
    <p>Important Concepts & Examples</p>
  </div>

  <span>›</span>
</button>

        <button
  className="chapter-card"
  onClick={() => {
  setSelectedChapter(3);
  setPage("chapter");
}}
>
          <div className="chapter-number">03</div>
          <div>
            <h3>Chapter 3</h3>
            <p>Practice & Numerical Problems</p>
          </div>
          <span>›</span>
        </button>

      </section>

    </main>
  );
  }
  if (page === "chapter") {
  return (
    <main className="chapter-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("learning")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="chapter-content">
        <span>📖</span>
        <h2>Chapter {selectedChapter}</h2>
        <p>
  {selectedChapter === 1
    ? "Introduction & Basic Concepts"
    : selectedChapter === 2
    ? "Important Concepts & Examples"
    : "Practice & Numerical Problems"}
</p>
      </section>
<section className="chapter-materials">

  <button
  className="chapter-material-card"
  onClick={() => {
    setLearningSection("notes");
    setPage("notes");
  }}
>
  <span>📖</span>
  <div>
    <h3>Chapter Notes</h3>
    <p>Read complete chapter notes</p>
  </div>
  <b>›</b>
</button>
  
<button
  className="chapter-material-card"
  onClick={() => {
    setLearningSection("video");
    setPage("video");
  }}
>
  <span>🎥</span>
  <div>
    <h3>Video Lesson</h3>
    <p>Learn this chapter through video</p>
  </div>
  <b>›</b>
</button>

  <button className="chapter-material-card">
    <span>📝</span>
    <div>
      <h3>Practice Questions</h3>
      <p>Practice important questions</p>
    </div>
    <b>›</b>
  </button>

  <button
  className="chapter-material-card"
  onClick={() => {
    setLearningSection("test");
    setPage("test");
  }}
>
  <span>🧪</span>
  <div>
    <h3>Chapter Test</h3>
    <p>Test your chapter preparation</p>
  </div>
  <b>›</b>
</button>
</section>
    </main>
  );
  }

if (page === "practice") {
  return (
    <main className="practice-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("chapter")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="practice-header">
        <span>📝</span>
        <div>
          <h2>Chapter {selectedChapter} Practice</h2>
          <p>Practice important questions</p>
        </div>
      </section>

      <section className="practice-content">
        <div className="question-card">
          <strong>Question 1</strong>
          <p>
            Write the important points of this chapter.
          </p>
        </div>

        <div className="question-card">
          <strong>Question 2</strong>
          <p>
            Explain the basic concepts with suitable examples.
          </p>
        </div>

        <div className="question-card">
          <strong>Question 3</strong>
          <p>
            Solve the given practice problem step by step.
          </p>
        </div>
      </section>

    </main>
  );
}

if (page === "test") {
  return (
    <main className="test-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("chapter")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="test-header">
        <span>🧪</span>
        <div>
          <h2>Chapter {selectedChapter} Test</h2>
          <p>Test your chapter preparation</p>
        </div>
      </section>

      <section className="test-content">
        <div className="test-info">
          <strong>Chapter Test</strong>
          <p>10 Questions · Practice Test</p>
        </div>

        <button className="start-test-button">
          Start Test
        </button>
      </section>

    </main>
  );
}
  
  if (page === "notes") {
  return (
    <main className="notes-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("chapter")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="notes-header">
        <span>📖</span>
        <div>
          <h2>Chapter {selectedChapter} Notes</h2>
<p>
  {selectedChapter === 1
    ? "Introduction & Basic Concepts"
    : selectedChapter === 2
    ? "Important Concepts & Examples"
    : "Practice & Numerical Problems"}
</p>
        </div>
      </section>

      <article className="notes-content">
        <h2>Introduction</h2>

        <p>
          In this chapter, you will learn the basic concepts,
          important definitions and fundamental ideas of the topic.
        </p>

        <h2>Key Concepts</h2>

        <ul>
          <li>Understand the basic definitions.</li>
          <li>Learn important concepts step by step.</li>
          <li>Practice examples and questions.</li>
        </ul>

        <h2>Quick Revision</h2>

        <p>
          Revise the important points regularly and practice
          questions after completing the chapter.
        </p>
      </article>

    </main>
  );
  }
if (page === "video") {
  return (
    <main className="video-page">

      <header className="subject-header">
        <button
          className="back-button"
          onClick={() => setPage("chapter")}
        >
          ←
        </button>

        <div>
          <p>Class {selectedClass}</p>
          <h1>{selectedSubject}</h1>
        </div>
      </header>

      <section className="video-header">
        <span>🎥</span>
        <div>
          <h2>Chapter {selectedChapter} Video Lesson</h2>
<p>
  {selectedChapter === 1
    ? "Introduction & Basic Concepts"
    : selectedChapter === 2
    ? "Important Concepts & Examples"
    : "Practice & Numerical Problems"}
</p>
        </div>
      </section>

      <section className="video-placeholder">
        <div className="play-icon">▶</div>
        <h3>Video Lesson</h3>
        <p>Video will be available here.</p>
      </section>

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
          <button
            className="class-card"
            onClick={() => {
              setSelectedClass("10");
              setPage("courses");
            }}
          >
            <span>10</span>
            <div>
              <strong>Class 10</strong>
              <small>CBSE / BSEB</small>
            </div>
          </button>

          <button
            className="class-card"
            onClick={() => {
              setSelectedClass("11");
              setPage("courses");
            }}
          >
            <span>11</span>
            <div>
              <strong>Class 11</strong>
              <small>CBSE / BSEB</small>
            </div>
          </button>

          <button
            className="class-card"
            onClick={() => {
              setSelectedClass("12");
              setPage("courses");
            }}
          >
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
          <button
            className="quick-card"
            onClick={() => setPage("courses")}
          >
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

          <button onClick={() => setPage("courses")}>
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
        <b onClick={() => setPage("login")}>Login</b>
      </p>
    </main>
  );
}

export default App;
