import Card from "./components/animations/neumorphism-card"
import CustomRecurrenceModal from "./components/batch"
import EventForm from "./components/event-form"
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
      <PerplexityLayout/>
    </div>
  )
}

export default App
