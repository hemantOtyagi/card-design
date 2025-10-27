import Card from "./components/animations/neumorphism-card"
import CustomRecurrenceModal from "./components/batch"
import EventForm from "./components/event-form"
import PilgrimageCard from "./components/newCards/pilgrim-card"
import PilgrimThreeCard from "./components/newCards/pilgrim-three-card"
import PilgrimageTwoCard from "./components/newCards/pilgrim-two-card"
import TextOnlyCard from "./components/newCards/text-only-card"
import TextOnlyCardTwo from "./components/newCards/text-only-card-two"
import PrompContainer from "./components/promptbar/prompt-container"
import PerplexityLayout from "./components/promptbar/search-layout"
import SearchLayout from "./components/promptbar/search-layout"

const App = () => {
  return (
    <div className="h-screen min-w-[50vw] flex justify-center items-center bg-white">
      {/* <Card/> */}
      {/* <CustomRecurrenceModal/> */}
      {/* <EventForm/> */}
      {/* <PrompContainer/> */}
      {/* <PerplexityLayout/> */}
      {/* <PilgrimageCard/> */}
      {/* <PilgrimageTwoCard/> */}
      {/* <TextOnlyCard/> */}
      {/* <TextOnlyCardTwo/> */}
      <PilgrimThreeCard/>
    </div>
  )
}

export default App
