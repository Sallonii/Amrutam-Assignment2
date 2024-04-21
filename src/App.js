import {Switch, Route} from 'react-router-dom' // Importing Switch and Route components from react-router-dom
import './App.css' // Importing CSS file for styling
import Header from './components/Header' // Importing Header component
import FindDoctors from './components/FindDoctors' // Importing FindDoctors component
import DoctorProfile from './components/DoctorProfile'
import Home from './components/Home'
import About from './components/About'

// Functional component for the main app
const App = () => (
  <>
    {/* Render the Header component */}
    <Header />
    {/* Switch component to render different routes */}
    <Switch>
      {/* Route for finding doctors */}
      <Route exact path="/" component={Home} />
      <Route exact path="/find-doctors" component={FindDoctors} />
      <Route exact path="/about" component={About} />
      <Route exact path="/doctor1" component={DoctorProfile} />
    </Switch>
  </>
)

export default App
