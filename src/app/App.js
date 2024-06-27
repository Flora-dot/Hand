import { AboutUS } from '../components/About Us/AboutUs';
import { CompanyInfo } from '../components/CompanyInfo/CompanyInfo';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero Section/Hero';
import { MeetTeam } from '../components/MeetTeam/MeetTeam';
import { ContactUs} from '../components/SendProposal/ContactUs';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutUS />
    <MeetTeam />
    <CompanyInfo />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
