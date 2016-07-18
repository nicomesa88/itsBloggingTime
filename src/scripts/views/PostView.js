import React from 'react'
import Header from './header'

const AllView = React.createClass ({
    render: function() {
        return (
            <div className = 'allPosts'>
                <Header />
                <PostsDisplay />
            </div>
            )
    }
})

const PostsDisplay = React.createClass ({
    render: function() {
        return (
            <div className = 'postDisplay'>
                <div className = 'postContainer'>
                    <div className = 'postTitle'>Title</div>
                    <div className = 'postPreview'>Post Preview</div>
                </div>
                <div className = 'postContainer' id = 'right'>
                    <div className = 'user'>Posted by: User</div>
                    <div className = 'date'>Posted On: today</div>
                </div>
                <hr/>
            </div>)
    }
})

export default AllView