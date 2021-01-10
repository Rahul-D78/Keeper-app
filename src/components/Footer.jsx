/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default function Footer() {

    const date = new Date()
    const current = date.getFullYear()
    return (
        <div>
            <footer>
               <a href="https://github.com/Rahul-D78"><p>Made with love from React.js on {current}</p></a>
            </footer>
        </div>
    )
}