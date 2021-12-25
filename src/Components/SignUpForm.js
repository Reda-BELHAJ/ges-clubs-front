import React, { Component, setState } from 'react'
import UserService from '../Services/User/UserService';
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import Select from 'react-select';

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>
          This field is required!
        </div>
      );
    }
  };
  
  const vusername = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value1, value2) => {
    if (value1.length < 6 || value1.length > 40) {
      return (
        <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>
          The password must be between 6 and 40 characters.
        </div>
      );
    }
    else if(value1 === value2) {
        return (
          <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>
            It doesn't match with the password.
          </div>
        );
      }
  };

  const options = [
    { value: 'Administrateur', label: 'Admin' },
    { value: 'Etudiant exterieur', label: 'Externe de UIR' },
    { value: 'Etudiant UIR', label: 'Interne de UIR' },
  ];

export default class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeconfirmPassword = this.onChangeconfirmPassword.bind(this);

        this.state = {
            username: "",
            role: "",
            password: "",
            confirmPassword: "",
            successful: false,
            message: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        }, () => {console.log(this.state.username);});
    }
    
    onChangeRole = e => {
        this.setState({
            role: e.value
        }, () => {console.log(this.state.role);});
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeconfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            UserService.register(
                this.state.username,
                this.state.role,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }

    render() {
        return (
            <>
                <Form
                    onSubmit={this.handleRegister}
                    ref={c => {
                        this.form = c;
                    }} 
                >
                    {!this.state.successful && (
                        <div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="affiliation">Affiliation<span className="text-red-600">*</span></label>
                                    <Select name="affiliation" id="affiliation" onChange={this.onChangeRole} value={this.state.role} options={options} />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="username">Username <span className="text-red-600">*</span></label>
                                    <Input id="username" type="text" className="form-input w-full text-gray-800" placeholder="Enter your username" 
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required, vusername]}               
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                                    <Input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-600">*</span></label>
                                    <Input id="confirmPassword" type="password" className="form-input w-full text-gray-800" placeholder="Confirm your password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChangeconfirmPassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 text-center mt-3">
                                By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                            </div>
                        </div>
                    )}
                    
                    {this.state.message && (
                        <div className="form-group">
                            <div style={{ color: 'red' }}
                                className={
                                    this.state.successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {this.state.message}
                            </div>
                        </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
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



