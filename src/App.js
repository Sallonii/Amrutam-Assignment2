import {Switch, Route} from 'react-router-dom' // Importing Switch and Route components from react-router-dom
import './App.css' // Importing CSS file for styling
import Header from './components/Header' // Importing Header component
import DoctorProfile from './components/DoctorProfile'

// Functional component for the main app
const App = () => (
  <>
    {/* Render the Header component */}
    <Header />
    {/* Switch component to render different routes */}
    <Switch>
      {/* Route for finding doctors */}
      <Route exact path="/doctor1" component={DoctorProfile} />
    </Switch>
  </>
)

export default App
