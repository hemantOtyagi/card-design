import Card from "./components/animations/neumorphism-card"
import CustomRecurrenceModal from "./components/batch"
import EventForm from "./components/event-form"

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      {/* <Card/> */}
      {/* <CustomRecurrenceModal/> */}
      <EventForm/>
    </div>
  )
}

export default App
