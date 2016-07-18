import React from 'react'

const Header = React.createClass ({
    render: function() {
        return (
            <div className = 'header'>
                <h1>It's Blogging Time</h1>
                <Links />
            </div>
            )
    }
})

const Links = React.createClass ({
    render: function () {
        return (
            <div className = 'navBar'>
                <a href = '#allPosts'>Home</a>
                <a href = '#login'>Login</a>
                <a href = '#compose'>Compose</a>
                <a href = '#myPosts'>My Posts</a>
                <a href = '#allPosts'>All</a>
            </div>
            )
    }
})

export default Header