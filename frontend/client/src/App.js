import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './containers/user/aboutUs';
import AboutNepal from './containers/user/aboutNepal';
import WhyUs from './containers/user/whyChooseUs';
import Jobs from './containers/user/jobs';
import Resume from './containers/user/resume';
import Apply from './containers/user/apply';
import Gallery from './containers/user/gallery';
import Contact from './containers/user/contact';
import Newspaper from './containers/user/newspaper';
import License from './containers/user/license';
import Home from './containers/user/home';
import Header from './components/header/header';
import NavBar from './components/navigation/navBar';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App" style={{ width: "100%" }} >
        <Header />
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-nepal" element={<AboutNepal />} />
        <Route path="/choose-us" element={<WhyUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/license" element={<License />} />
        <Route path="/about-us/about-us" element={<AboutUs />} />
        <Route path="/about-us/about-nepal" element={<AboutNepal />} />
        <Route path="/about-us/choose-us" element={<WhyUs />} />
        <Route path="/about-us/jobs" element={<Jobs />} />
        <Route path="/about-us/resume" element={<Resume />} />
        <Route path="/about-us/apply" element={<Apply />} />
        <Route path="/about-us/gallery" element={<Gallery />} />
        <Route path="/about-us/contact-us" element={<Contact />} />
        <Route path="/about-us/newspaper" element={<Newspaper />} />
        <Route path="/about-us/license" element={<License />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
