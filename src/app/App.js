import { AboutUS } from '../components/About Us/AboutUs';
import { CompanyInfo } from '../components/CompanyInfo/CompanyInfo';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero Section/Hero';
import { MeetTeam } from '../components/MeetTeam/MeetTeam';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutUS />
    <MeetTeam />
    <CompanyInfo />
    </>
  );
}

export default App;
