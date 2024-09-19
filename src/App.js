// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { auth } from './components/SignInPages/firebase'; // Adjust the import path as needed
// import Header from './components/Header';
// import AuthHeader from './components/AuthHeader';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import FindVanPage from './components/FindVanPage';
// import AboutPage from './components/AboutPage';
// import Register from './components/SignInPages/register'; // Adjust the import path
// import Profile from './components/SignInPages/profile'; // Adjust the import path
// import Login from './components/SignInPages/login';
// import VanDetailsPage from './components/VanDetailsPage';
// import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     return () => unsubscribe(); // Clean up subscription
//   }, []);

//   return (
//     <Router>
//       <div className='App'>
//         <AppRoutes user={user} />
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// function AppRoutes({ user }) {
//   const location = useLocation();
//   const isAuthPage = location.pathname === '/login'|| location.pathname === '/register' || location.pathname === '/signin' || location.pathname === '/profile';

//   return (
//     <>
//       {isAuthPage ? <AuthHeader /> : <Header />}
//       <Routes>
//         <Route
//           path="/"
//           element={user ? <Navigate to="/profile" /> : <HomePage />}
//         />
//         <Route path="/find-van" element={<FindVanPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/contact" element={user ? <Navigate to="/profile" /> : <Profile />} />
//         <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
//         <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
//         <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/van-details/:id" element={<VanDetailsPage />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
// import { auth } from './components/SignInPages/firebase'; // Adjust the import path as needed
// import Header from './components/Header';
// import AuthHeader from './components/AuthHeader';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import FindVanPage from './components/FindVanPage';
// import AboutPage from './components/AboutPage';
// import Register from './components/SignInPages/register'; // Adjust the import path
// import Profile from './components/SignInPages/profile'; // Adjust the import path
// import Login from './components/SignInPages/login';
// import VanDetailsPage from './components/VanDetailsPage';
// import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';

// // Host Components
// // import HostHeader from './host-components/HostHeader';
// // import HostFooter from './host-components/HostFooter';
// import HostVansDetails from './host-components/HostVansDetails';
// import img1 from './host-components/images/img-1.png';
// import img2 from './host-components/images/img-2.png';
// import img3 from './host-components/images/img-3.png';
// import graph from './host-components/images/Group 313.png';
// import rates from './host-components/images/Group 306.png';

// function App() {
//   const [user, setUser] = useState(null);
//   const [selectedChoice, setSelectedChoice] = useState('Dashboard'); // For host dashboard

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     return () => unsubscribe(); // Clean up subscription
//   }, []);

//   const handleChoiceClick = (choice) => {
//     setSelectedChoice(choice);
//   };

//   return (
//     <Router>
//       <div className='App'>
//         <AppRoutes user={user} selectedChoice={selectedChoice} handleChoiceClick={handleChoiceClick} />
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// function AppRoutes({ user, selectedChoice, handleChoiceClick }) {
//   const location = useLocation();
//   const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/signin' || location.pathname === '/profile';

//   return (
//     <>
//       {isAuthPage ? <AuthHeader /> : <Header />}
//       <Routes>
//         {/* User Routes */}
//         <Route path="/" element={user ? <Navigate to="/profile" /> : <HomePage />} />
//         <Route path="/find-van" element={<FindVanPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/contact" element={user ? <Navigate to="/profile" /> : <Profile />} />
//         <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
//         <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
//         <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/van-details/:id" element={<VanDetailsPage />} />

//         {/* Host Routes */}
//         <Route
//           path="/host"
//           element={
//             <div className='host-page'>
//               <div className='choices-nav'>
//                 {['Dashboard', 'Income', 'Vans', 'Reviews'].map((choice) => (
//                   <p
//                     key={choice}
//                     className={`choice ${selectedChoice === choice ? 'active' : ''}`}
//                     onClick={() => handleChoiceClick(choice)}
//                   >
//                     {choice}
//                   </p>
//                 ))}
//               </div>
//               <div className='chosen-tab'>
//                 {selectedChoice === 'Dashboard' && <DashboardContent />}
//                 {selectedChoice === 'Income' && <IncomeContent />}
//                 {selectedChoice === 'Vans' && <VansContent />}
//                 {selectedChoice === 'Reviews' && <ReviewsContent />}
//               </div>
//             </div>
//           }
//         />
//         <Route path="/dashboard" element={<DashboardContent />} />
//         <Route path="/income" element={<IncomeContent />} />
//         <Route path="/vans" element={<VansContent />} />
//         <Route path="/reviews" element={<ReviewsContent />} />
//         <Route path="/vans/:vanId" element={<HostVansDetails />} />
//         <Route path="/about" element={<UnavailablePage />} />
//         <Route path="/find-van" element={<UnavailablePage />} />
//         <Route path="/unavailable" element={<UnavailablePage />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// // Placeholder components for host dashboard content
// const DashboardContent = () => (
//   <div>
//     <div className='first-part'>
//       <h1>Welcome!</h1>
//       <div className='text--wrapper'>
//         <p className='income-last'>Income last <span>30 days</span></p>
//         <Link to="/unavailable" className='link'>Details</Link>
//       </div>
//       <h1>$2,260</h1>
//     </div>
//     <div className='second-part'>
//       <div className='text--wrapper'>
//         <p className='review-score'>Review score <i className="ri-star-fill"></i>5.0<span>/5</span></p>
//         <Link to="/unavailable" className='link'>Details</Link>
//       </div>
//     </div>
//     <div className='third-part'>
//       <div className='text--wrapper'>
//         <p className='review-score'>Your listing vans</p>
//         <Link to="/unavailable" className='link'>View all</Link>
//       </div>
//       <div className='main-wrapper'>
//         <div className='img-text-wrapper'>
//           <div className='car-image'>
//             <img src={img1} alt='car'/>
//           </div>
//           <p className='car-name'>Modest Explore<br/> <span>$60/day</span></p>
//         </div>
//         <Link to="/unavailable" className='link'>Edit</Link>
//       </div>
//       <div className='main-wrapper'>
//         <div className='img-text-wrapper'>
//           <div className='car-image'>
//             <img src={img3} alt='car'/>
//           </div>
//           <p className='car-name'>Beach Bum<br/> <span>$80/day</span></p>
//         </div>
//         <Link to="/unavailable" className='link'>Edit</Link>
//       </div>
//       <div className='main-wrapper'>
//         <div className='img-text-wrapper'>
//           <div className='car-image'>
//             <img src={img2} alt='car'/>
//           </div>
//           <p className='car-name'>Green Wonder<br/> <span>$80/day</span></p>
//         </div>
//         <Link to="/unavailable" className='link'>Edit</Link>
//       </div>
//     </div>
//   </div>
// );

// const IncomeContent = () => (
//   <div className='income-content'>
//     <h2>Income</h2>
//     <p>Last <span>30days</span></p>
//     <h2>$2,260</h2>
//     <div className='graph-image'>
//       <img src={graph} alt='graph' />
//     </div>
//     <div className='income-text-wrapper'>
//       <h3>Your transactions (3)</h3>
//       <p>Last <span>30 days</span></p>
//     </div>
//     <div className='transaction-wrapper'>
//       <h3>$720</h3>
//       <p>1/12/22</p>
//     </div>
//     <div className='transaction-wrapper'>
//       <h3>$560</h3>
//       <p>10/11/22</p>
//     </div>
//     <div className='transaction-wrapper'>
//       <h3>$980</h3>
//       <p>23/11/22</p>
//     </div>
//   </div>
// );

// const VansContent = () => {
//   const navigate = useNavigate();

//   const vans = [
//     { id: 1, type: 'simple', name: 'Modest Explorer', price: '$80', img: img1, description: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!' },
//     { id: 2, type: 'rugged', name: 'Beach Bum', price: '$80', img: img3, description: 'Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you wont find in an ordinary camper.' },
//     { id: 3, type: 'rugged', name: 'Green Wonder', price: '$70', img: img2, description: 'With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle thats perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.' },
//   ];

//   const handleClick = (van) => {
//     navigate(`/vans/${van.id}`, { state: { van } });
//   };

//   return (
//     <div>
//       <div className='vans-content'>
//         <h2>Your listed vans</h2>
//         <div className='vans-container'>
//           {vans.map((van) => (
//             <div
//               key={van.id}
//               className='vans-text-wrapper'
//               onClick={() => handleClick(van)}
//             >
//               <div className='van-image'>
//                 <img src={van.img} alt={van.name} />
//               </div>
//               <p className='van-name'>
//                 {van.name}<br /><span>{van.price}/day</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ReviewsContent = () => (
//   <div className='reveiwes-page'>
//     <div className='reviews-wrapper'>
//       <h2>Your reviews</h2>
//       <p>Last <span>30 days</span></p>
//     </div>
//     <div className='rates-image'>
//       <img src={rates} alt='rates'/>
//     </div>

//     <p>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     </p>
//     <p className='reviewer'>Elliot <span>December 1, 2022</span></p>
//     <p className='review-messege'>
//       The beach bum is such as awesome van! Such as comfortable trip.
//       We had it for 2 weeks and there was not a single issue. Super clean when
//       we picked it up and the host is very comfortable and understanding. Highly
//       recommended!
//     </p>

//     <p>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     <i className="ri-star-fill"></i>
//     </p>
//     <p className='reviewer'>Sandy <span>November 23, 2022</span></p>
//     <p className='review-messege'>
//       The beach bum is such as awesome van! Such as comfortable trip.
//       We had it for 2 weeks and there was not a single issue. Super clean when
//       we picked it up and the host is very comfortable and understanding. Highly
//       recommended!
//     </p>
//   </div>
// );

// const UnavailablePage = () => (
//   <div className='unavailable-page'>
//     <h2>This page is not available in host mode</h2>
//   </div>
// );

// export default App;

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

