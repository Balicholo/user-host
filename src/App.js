import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { auth } from './components/SignInPages/firebase'; // Adjust the import path as needed
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FindVanPage from './components/FindVanPage';
import AboutPage from './components/AboutPage';
import Register from './components/SignInPages/register'; // Adjust the import path
import Profile from './components/SignInPages/profile'; // Adjust the import path
import Login from './components/SignInPages/login';
import VanDetailsPage from './components/VanDetailsPage';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Host Components
import DashboardContent from './host-components/DashboardContent';
import IncomeContent from './host-components/IncomeContent';
import VansContent from './host-components/VansContent';
import ReviewsContent from './host-components/ReviewsContent';
import HostVansDetails from './host-components/HostVansDetails';
import UnavailablePage from './host-components/UnavailablePage';

function App() {
  const [user, setUser] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState('Dashboard'); // For host dashboard

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <Router>
      <div className='App'>
        <AppRoutes user={user} selectedChoice={selectedChoice} handleChoiceClick={handleChoiceClick} />
        <ToastContainer />
      </div>
    </Router>
  );
}

function AppRoutes({ user, selectedChoice, handleChoiceClick }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/signin' || location.pathname === '/profile';

  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Header />}
      <Routes>
        {/* User Routes */}
        <Route path="/" element={user ? <Navigate to="/profile" /> : <HomePage />} />
        <Route path="/find-van" element={<FindVanPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/contact" element={user ? <Navigate to="/profile" /> : <Profile />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/van-details/:id" element={<VanDetailsPage />} />

        {/* Host Routes */}
        <Route
          path="/host"
          element={
            <div className='host-page'>
              <div className='choices-nav'>
                {['Dashboard', 'Income', 'Vans', 'Reviews'].map((choice) => (
                  <p
                    key={choice}
                    className={`choice ${selectedChoice === choice ? 'active' : ''}`}
                    onClick={() => handleChoiceClick(choice)}
                  >
                    {choice}
                  </p>
                ))}
              </div>
              <div className='chosen-tab'>
                {selectedChoice === 'Dashboard' && <DashboardContent />}
                {selectedChoice === 'Income' && <IncomeContent />}
                {selectedChoice === 'Vans' && <VansContent />}
                {selectedChoice === 'Reviews' && <ReviewsContent />}
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={<DashboardContent />} />
        <Route path="/income" element={<IncomeContent />} />
        <Route path="/vans" element={<VansContent />} />
        <Route path="/reviews" element={<ReviewsContent />} />
        <Route path="/vans/:vanId" element={<HostVansDetails />} />
        <Route path="/about" element={<UnavailablePage />} />
        <Route path="/find-van" element={<UnavailablePage />} />
        <Route path="/unavailable" element={<UnavailablePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

