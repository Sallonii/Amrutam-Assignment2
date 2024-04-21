import {Component} from 'react'
import {FaStar} from 'react-icons/fa'
import {MdVerifiedUser} from 'react-icons/md'

import DoctorDetails from '../DoctorDetails'
import AppointmentCard from '../AppointmentCard'

import './index.css'

class DoctorProfile extends Component {
  // Render profile section
  renderProfile = () => (
    <div className="profile-container">
      <div className="profile-details-container">
        {/* Profile name and image section */}
        <div className="profile-name-image-container">
          <img
            src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712675868/ai-generated-executive-person-smile-confidence-attractive-modern-lady-female-office-portrait-beauty-women-adult-caucasian-young-business-professional-lifestyle-closeup-cheerful-businesswoman-looking-happy-face-free-photo_fv4afj.jpg"
            alt="profile"
            className="profile-image"
          />
          {/* Doctor details section */}
          <div className="doc-details-container">
            <h4 className="doctor-name">
              Dr. Bruce Willis <MdVerifiedUser className="verified-icon" />{' '}
              {/* Verified user icon */}
            </h4>
            <p className="doc-type">Gynecologist</p>
            {/* Doctor rating section */}
            <div className="doc-rating-container">
              <p>4.2</p>
              <FaStar className="star-icon" /> {/* Star icon */}
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
            </div>
          </div>
        </div>
        {/* Followers, following, and post section */}
        <div className="follow-post-container">
          <div className="follow-item">
            <h5 className="follow-item-heading">Followers</h5>
            <p className="follow-item-value">850</p>
          </div>
          <div className="follow-item">
            <h5 className="follow-item-heading">Following</h5>
            <p className="follow-item-value">18K</p>
          </div>
          <div className="follow-item">
            <h5 className="follow-item-heading">Post</h5>
            <p className="follow-item-value">250</p>
          </div>
        </div>
        {/* Book an appointment button */}
        <button type="button" className="book-appointment-btn">
          Book an Appointment
        </button>
      </div>
    </div>
  )

  // Render details card section
  renderDetailsCard = () => (
    <div className="doctor-details-and-appointment-container">
      {/* Render DoctorDetails component */}
      <DoctorDetails />
      {/* Render AppointmentCard component */}
      <AppointmentCard />
    </div>
  )

  render() {
    return (
      <div className="main-container">
        {/* Render profile section */}
        {this.renderProfile()}
        {/* Render details card section */}
        {this.renderDetailsCard()}
      </div>
    )
  }
}

export default DoctorProfile
