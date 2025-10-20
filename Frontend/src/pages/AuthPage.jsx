import "../styles/auth.css";
import { SignInButton } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand-container">
            <img src="/logo.png" alt="Slap" className="brand-logo" />
            <span className="brand-name">StudyBrew</span>
          </div>

          <h1 className="hero-title">Where Work Happens ✨</h1>

          <p className="hero-subtitle">
            Welcome to Virtual Study Cafe, your cozy online space to focus, collaborate, and grow! Sign in to unlock your personalized study environment, join group sessions, track your progress, and connect with fellow learners. Whether you’re here to power through assignments, attend live study rooms, or simply enjoy a productive atmosphere, Virtual Study Cafe is your go-to hub for achieving your academic goals—anytime, anywhere.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span>Focus-Friendly Study Rooms</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video calls & meetings</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure & private</span>
            </div>
          </div>

          <SignInButton mode="modal">
            <button className="cta-button">
              Get Started with “StudyBrew”
              <span className="button-arrow">→</span>
            </button>
          </SignInButton>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-image-container">
                    <img src="/auth-i.jpg" alt="Team collaboration" className="auth-image" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;