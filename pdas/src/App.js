import ProfileCard from "./ProfileCard";
// Communicating from parent to child (one-way )is done using Props  ( here from App to ProfileCard)
function App() {
  return (
    <div>
      <div> Personal Digital Assistant</div>
      <hr></hr>
      <ProfileCard title="Alexa" handle="@alexa99"/>
      <ProfileCard title="Cortana" handle="@cortana4" />
      <ProfileCard title="Siri" handle="@siri123"/>
    </div>
  );
}

export default App;
