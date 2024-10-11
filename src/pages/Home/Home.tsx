import AboutUs from "../../components/AboutUs/AboutUs";
import Achievements from "../../components/Achievements/Achievements";
import ContactSection from "../../components/ContactSection/ContactSection";
import Header from "../../components/Layout/Header/Header";
import NewArrivalsSection from "../../components/NewArrivalsSlider/NewArrivalsSection";
import Partners from "../../components/Partners/Partners";
import Projects from "../../components/HomeProjects/HomeProjects";
import Meta from "../../utils/Meta";

const Home = () => {
  return (
    <Meta
      title="Комплексное оснащение школ и детских садов"
      // description="Комплексное оснащение детских садов и школ по умеренным ценам от производителя НПК Олимп позволит сократить ваши расходы и количество поставщиков"
    >
      <div>
        <Header />
        <NewArrivalsSection />
        <AboutUs />
        <Achievements />
        <Projects />
        <Partners />
        <ContactSection />
      </div>
    </Meta>
  );
};

export default Home;
