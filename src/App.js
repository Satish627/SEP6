import './App.css'
import LoginForm from './components/LoginPage/LoginForm';
import Home from './components/HomePage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpForm from './components/SignUpPage/SignUpForm';

function App() {
  return (
    <div className="LoginForm">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
