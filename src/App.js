import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import ChatPage from "./components/chat/ChatPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage setUser={setUser} />} />
          <Route
            path="/chat/:roomID"
            element={
              <ProtectedRoute user={user}>
                <ChatPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
