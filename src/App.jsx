import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Service from './components/service/Service'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import chat from './assets/gif json/chatbot2.json';
import scroll from './assets/gif json/top.json';
import ChatBot from './components/chatbot/Chatbot'
import Education from './components/education/Education'
import loader from './assets/gif json/hello_loader.json';
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'


const ChatIcon = ({ onclick }) => (
  <div className="fixed z-50 p-3 rounded-full cursor-pointer right-1 te1xt-white bottom-20 hover:scale-125">
    <div style={{ width: "70px" }}><Lottie animationData={chat} onClick={onclick} /></div>
  </div>
);

const ScrollToTopIcon = ({ onClick }) => (
  <div onClick={onClick} className="fixed z-50 p-3 text-white transition-colors rounded-full shadow-lg cursor-pointer bottom-4 right-2 hover:scale-125">
    <div style={{ width: "50px" }}><Lottie animationData={scroll} /></div>
  </div>
);


function App() {


  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [showChatbot, setShowChatbot] = useState(false);

  const chatbot = () => {
    setShowChatbot(!showChatbot);
  }


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 7000); // Adjust time as needed
  }, []);

  if (loading) {
    return (
      <div className="items-center flex justify-center h-screen bg-[#0f172a] overflow-hidden" >
          <Lottie animationData={loader} style={{width:"500px"}}/>
      </div>
    );
  }

  
  


  return (
    <div >
      <Navbar />
      {showIcons && (
        <>
          <ChatIcon onclick={chatbot} />
          <ScrollToTopIcon onClick={scrollToTop} />
        </>
      )}
      {showChatbot && <div className="fixed z-50 p-4 bg-white rounded shadow-lg bottom-40 right-4">
        <ChatBot setShowChatbot={setShowChatbot}/>
      </div>}
      <Home />
      <About />
      <Education/>
      <Experience/>
      <Skills />
      <Projects />
      <Service />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
