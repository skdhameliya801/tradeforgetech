import logo from './logo.svg';
import './App.css';
import Contact_Us from './Components/Contact Us/Contact_Us';
import Nav_Bar from './Components/Nav Bar/Nav_Bar';
import Slider from './Components/Slider/Slider';
import About_Us from './Components/About Us/About_Us';
import Our_Products from './Components/Our Products/Our_Products';
import Our_Vision from './Components/Our Unique Offering/Our_Vision';
import Our_Team from './Components/Our Team/Our_Team';
import Footer from './Components/Footer/Footer';
import Why_Us from './Components/Why Us/Why_Us';

function App() {
  return (
    <>
      <p className='text-center mt-5 companyName'>
        <h1>
          <span><img src="logo_tradeforgetech.png" width="90vw" alt="" /></span>
          TradeForgeTech Inc.
        </h1>
        <i className='text-right'>Building Partnerships, Delivering Excellence</i>
      </p>
      <Nav_Bar />
      <Slider />
      <About_Us />
      <Our_Products />
      <Our_Vision />
      <Why_Us />
      {/* <Our_Team /> */}
      <Contact_Us />
      <Footer />
    </>
  );
}

export default App;