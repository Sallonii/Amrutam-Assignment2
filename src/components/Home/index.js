import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="text-container">
      <h1 className="welcome-heading">Namaste, Welcome to Amrutam</h1>
      <h1 className="detail-heading">
        Step in Holistic Healing with <span>Ayurveda</span>
      </h1>
      <h1 className="detail-heading">
        Book Consultation with Certified Experts.
      </h1>
      <Link to="find-doctors">
        <button type="button" className="find-doctors-button btn">
          Find Doctors
        </button>
      </Link>
    </div>
    <div className="yoga-image-container">
      <img
        src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713681263/image_57_nuiltm.png"
        alt="yoga pose"
      />
    </div>
  </div>
)

export default Home
