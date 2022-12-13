import './Login.scss';
import {Component} from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Button} from "reactstrap"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeInput = (e) => {
        // const { name, value } = e.target;
        this.setState = ({
            username: e.target.value,
            password: e.target.value
            //  [name]: value 
        })
    }

    handleLogin = () => {
        console.log(this.setState);
    }
    render() {
        return (
            <>
                <div className="login-background">
                    <div className="login-container">
                        <div className="login-content row">
                            <div className="col-6 login-content-left">
                                <h2 className="col-12 text-center">Login</h2>
                                <div className='col-12 form-group'>
                                    <label>Username:</label>
                                    <input 
                                    name='username'
                                    type="text" 
                                    className='form-control' 
                                    placeholder='Enter your username'
                                    defaultValue={this.state.username}
                                    onChange={ (e) => {
                                        this.handleChangeInput(e)
                                    }}/>
                                </div>
                                <div className='col-12 form-group'>
                                    <label>Password:</label>
                                    <input 
                                    name='password'
                                    type="password" 
                                    className='form-control' 
                                    placeholder='Enter your password'
                                    defaultValue={this.state.password}
                                    onChange={ (e) => {
                                        this.handleChangeInput(e)
                                    }}
                                    />
                                </div>
                                <Button className='col-12 button' onClick={() => {this.handleLogin()}}>Login</Button>
                                <div className='col-12'>
                                    <span>Forgot your password?</span>
                                </div>
                                <div className='col-12 text-center my-2'>
                                    <span className=''>Or login with</span>
                                </div>
                                <div className='row social-login'>
                                    <div className='col-6'><FaFacebook style={{color: "#1873EB"}}/></div>
                                    <div className='col-6'><FaGoogle style={{color: "#ea4335"}}/></div>
                                </div>
                            </div>
                            <div className='col-6 login-content-right'>
                                <div className="login-image">
                                    {/* <img src="../../images/login-banner.jpg" alt="" /> */}
                                    <img src="https://www.lotteria.vn/grs-static/images/login-banner.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login