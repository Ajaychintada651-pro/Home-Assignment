import "./App.css";
import EligibilitySection from "./components/EligibilitySection";
import Header from "./components/Header";
import LastSection from "./components/LastSection";
import LearningInACCA from "./components/LearningInACCA";
import PlacementAssistance from "./components/PlacementAssisstance";
import TopSection from "./components/TopSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

const App = () => (
  <>
    <Header />
    <TopSection />
    <WhyChooseUsSection />
    <EligibilitySection />
    <LearningInACCA />
    <PlacementAssistance />
    <LastSection />
  </>
);

export default App;
