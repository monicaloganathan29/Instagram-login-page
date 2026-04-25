import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="phone-box">
        <div className="phone-screen">
          <div className="story-circle"></div>
          <h2>Instagram</h2>
          <p>Share your moments</p>
        </div>
      </div>

      <div className="right-side">
        <div className="login-box">
          <h1>Instagram</h1>

          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />

          <button>Log in</button>

          <div className="or">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="facebook">Log in with Facebook</p>
          <p className="forgot">Forgot password?</p>
        </div>

        <div className="signup-box">
          Don&apos;t have an account? <span>Sign up</span>
        </div>

        <p className="get-app">Get the app.</p>
      </div>
    </div>
  );
}

export default App;