import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home';
import Scan from './pages/Scan';
import ScanResult from './pages/ScanResult';
import Perfumes from './pages/Perfumes';
import PerfumeDetail from './pages/PerfumeDetail';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';

import logo from './images/icon/logo_scentlab01.png';
import footerLogo from './images/icon/logo_scentlab01.png';


function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">

      <header>
        <div className="header_wrap">

          <ul className='header_gnb'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/scan">Scan</Link></li>
          <li><Link to="/perfumes">Perfumes</Link></li>
          <li><Link to="/archive">Archive</Link></li>
        </ul>

        <div className="logo">
          <Link to="/"><img src={logo} alt="로고" /></Link>
        </div>

        <div className="icon_gnb">
          <Link to="/archive"><i className="fa-regular fa-heart"></i></Link>
          <Link to="/archive"><i className="fa-regular fa-user"></i></Link>
        </div>

        </div>
      </header>

      {/* --------/헤더------- */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/scan" element={<Scan />} />

          <Route path="/scan/result" element={<ScanResult />} />

          <Route path="/perfumes" element={<Perfumes />} />

          <Route path="/perfume/:id" element={<PerfumeDetail />} />

          <Route path="/archive" element={<Archive />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* -------------/푸터---------------- */}

      <footer>
        <div className="line"></div>

        <div className="footer_content">

          <div className="left_footer">
            <img src={footerLogo} alt="로고" />
            <p className="noti">
              Scent LAB은 취업용 포트폴리오를 목적으로 한 개인 제작 사이트입니다.<br />사이트 제작에 사용된 모든 이미지들은 상업적 이용을 하지 않으며 오로지 취업용으로만 사용됩니다.
            </p>
          </div>

          <ul className="footer_gnb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Scan">Scan</Link></li>
            <li><Link to="/Perfumes">Perfumes</Link></li>
            <li><Link to="/archive">Archive</Link></li>
          </ul>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
