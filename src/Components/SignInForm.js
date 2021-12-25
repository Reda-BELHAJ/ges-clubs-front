import React, {Component } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../Services/User/UserService';

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert" style={{ color: 'red' }} >
          This field is required!
        </div>
      );
    }
  };

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          UserService.login(this.state.username, this.state.password).then(
            () => {
              this.props.history.push("/profile");
              window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }
      }

    render() {
        return (
            <>
                <Form
                    onSubmit={this.handleLogin}
                    ref={c => {
                        this.form = c;
                      }}
                >
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="username">Username</label>
                            <Input id="username" type="text" className="form-input w-full text-gray-800" placeholder="Enter your username"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                            </div>
                            <Input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}

                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="text-gray-600 ml-2">Keep me signed in</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3 grid grid-cols-2 gap-4">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full gap-4">
                                Sign in
                            </button>
                            
                        </div>
                    </div>
                </Form>
    
                <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
            </>
        )
    }
    
}
   
    