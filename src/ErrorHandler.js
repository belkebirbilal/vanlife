import { useRouteError } from "react-router-dom";
import './ErrorHandler.css'; 

export default function ErrorHandler() {
  const error = useRouteError();

  const message = error?.message || "An unexpected error occurred.";
  const status = error?.status || "Unknown Status";
  const statusText = error?.statusText || "Something went wrong.";

  console.error("Error caught by ErrorHandler:", error);

  return (
    <div className="error-container">
      <h2 className="error-title">Oops! Something went wrong.</h2>
      <p className="error-message">{message}</p>
      <pre className="error-details">
        {status} : {statusText}
      </pre>
      <div className="error-actions">
        <button className="error-button" onClick={() => window.location.reload()}>
          Reload Page
        </button>
        <a href="/" className="error-link">Go Back to Home</a>
      </div>
    </div>
  );
}
