import React from 'react'
import Header from './header'
import {PostModel} from '../models/models'

// const AllView = React.createClass ({
//     render: function() {
//         return (
//             <div className = 'allPosts'>
//                 <Header />
//                 <PostsDisplay />
//             </div>
//             )
//     }
// })

// const PostsDisplay = React.createClass ({
//     render: function() {
//         return (
//             <div className = 'postDisplay'>
//                 <div className = 'postContainer'>
//                     <div className = 'postTitle'>Title</div>
//                     <div className = 'postPreview'>Post Preview</div>
//                 </div>
//                 <div className = 'postContainer' id = 'right'>
//                     <div className = 'user'>Posted by: User</div>
//                     <div className = 'datePosted'>Posted On: today</div>
//                 </div>
//                 <hr/>
//             </div>)
//     }
// })

// export default AllView

const AllView = React.createClass ({

    getInitialState: function() {
        return {
            postColl: this.props.postColl
        }
    },

    componentWillMount: function () {
        console.log('mounting')
        this.props.postColl.on('update', () => {
            this.setState ({
                postColl: this.state.postColl
            })
        })
    },

    render: function() {
        return (
            <div className = 'allPosts'>
                <Header />
                <PostsDisplay postColl = {this.state.listColl}/>
            </div>
            )
    }
})

const PostsDisplay = React.createClass ({
    render: function() {
        console.log(this.props)
        return (
            <div className = 'postDisplay'>
                <div className = 'postContainer'>
                    <div className = 'postTitle'>Title</div>
                    <div className = 'postPreview'>Post Preview</div>
                </div>
                <div className = 'postContainer' id = 'right'>
                    <div className = 'user'>Posted by: User</div>
                    <div className = 'datePosted'>Posted On: today</div>
                </div>
                <hr/>
            </div>)
    }
})

export default AllView