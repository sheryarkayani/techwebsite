import ClientsLogos from "../components/Homecomp/ClientsLogos";
import HeroSection from "../components/Homecomp/HomeHero";
import HomeServices from "../components/Homecomp/HomeServices";
import HomeGIT from "../components/Homecomp/HomeGIT";
import HExpertise from "../components/Homecomp/HExpertise";
import HomeCases from "../components/Homecomp/HomeCases";


const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ClientsLogos />
      <HomeServices />
      <HomeCases />
      <HExpertise />
      <HomeGIT />
    </div>
  );
}
export default Home;
