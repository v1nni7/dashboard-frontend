import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./hooks/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer
          autoClose={5000}
          closeOnClick={true}
          hideProgressBar={false}
          position="bottom-center"
          className="styled-toastify"
        />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/:operation"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
