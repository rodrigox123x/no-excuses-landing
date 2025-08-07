import HeroSection from "./components/HeroSection";
import LoadingVisual from "./components/LoadingVisual";
import Benefits from "./components/Benefits";
import MotivationalNotifications from "./components/MotivationalNotifications";
import CoachSoon from "./components/CoachSoon";
import Testimonials from "./components/Testimonials";
import SubscribeForm from "./components/SubscribeForm";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  return (
    <div className="main-container">
      <DarkModeToggle />
      <HeroSection />
      <LoadingVisual />
      <Benefits />
      <MotivationalNotifications />
      <CoachSoon />
      <Testimonials />
      <div id="subscribe-section" className="subscribe-section">
        <SubscribeForm />
      </div>
      <CookieBanner />
      <Footer />
    </div>
  );
}
