import React from 'react'
import ACTIONS from '../actions'
import Header from './header'

const LoginView = React.createClass ({
    render: function() {
        return (
            <div className = 'loginView'>
                <Header />
                <RegisterBox />
                <LoginBox />
            </div>
            )
    }
})

const RegisterBox = React.createClass ({
    _handleRegister: function(evt) {
        evt.preventDefault()
        ACTIONS.registerUser(evt.currentTarget.email.value,evt.currentTarget.password.value)
    },

    render: function() {
        return (
            <div className = 'loginForm register'>
                <form className = 'signIn' id = 'register'>
                    <h3>Register</h3>
                    <input type = 'text' name = 'registerName' placeholder = 'username' />
                    <input type = 'password' name = 'registerPassword' placeholder = 'password' />
                    <button type = 'submit'>Submit</button>
                </form>
                </div>
                )
    }
})

const LoginBox = React.createClass ({
    _handleLogin: function(evt) {
        evt.preventDefault()
        ACTIONS.logUserIn(evt.target.email.value,evt.target.password.value)
    },

    render: function(){
        return (
            <div className = 'loginForm login'>
                <form className = 'signIn' id = 'login'>
                    <h3>Login</h3>
                    <input type = 'text' name = 'loginName' placeholder = 'username' />
                    <input type = 'password' name = 'loginPassword' placeholder = 'password' />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
            )
    }
})

export default LoginView