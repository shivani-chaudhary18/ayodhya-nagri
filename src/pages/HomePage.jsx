import react from 'react';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import HighLights from '../components/HighLights.jsx';
import WhyUs from '../components/whyUs.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';



const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutSection />
            <HighLights />
            <WhyUs />
            <CTA />
            <Footer />
        </div>
    );
};

export default HomePage;
