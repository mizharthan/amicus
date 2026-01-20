import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CallRequestsPage from "./pages/CallRequestsPage";
import NetworkPage from "./pages/NetworkPage";
import { PrivateRoute } from "./components/PrivateRoute";
import HomePage from "./pages/Home";
import CallRedirect from "./components/CallRedirect";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* prettier-ignore */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/call-requests"
            element={
              <PrivateRoute>
                <CallRequestsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/network"
            element={
              <PrivateRoute>
                <NetworkPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/call" element={<CallRedirect />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
