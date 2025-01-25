import React from 'react'

function Header() {
  return <nav>
    <NavContent />
  </nav>
}

const NavContent = () => (
    <>
    <h2>Sandeep</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contacts">Contacts</a>
    </div>
    <a href="mailto:sandeepjhavc@gmail.com">
        <button>Email</button>

    </a>
    </>
)

export default Header