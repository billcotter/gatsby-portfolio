import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/billjcotter",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com/billjcotter",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/billjcotter",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
