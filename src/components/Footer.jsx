import React from 'react'
import {AiFillGithub, AiFillInstagram, AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src='https://avatars.githubusercontent.com/u/76050039'
                    alt="Founder"
                />
                <h2>Sandeep Jha</h2>
                <p>Motivation is temporary, <br />
                discipline lasts forever</p>

            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href='https://www.instagram.com/sandeepjhavc/'>
                        <AiFillInstagram />
                    </a>
                    <a href='https://github.com/SandeepJhaVC'>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href='#home'>
                <AiOutlineArrowUp />
            </a>
        </footer>
    )
}

export default Footer