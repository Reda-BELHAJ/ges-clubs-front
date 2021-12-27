import React, { Component, useState } from 'react'
import UserService from '../Services/User/UserService';
import Form from "react-validation/build/form";
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


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

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("none");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [form, setForm] = useState("");
    const [checkBtn, setCheckBtn] = useState("");
    let navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    
    const onChangeRole = (e) => {
        setRole(e.value);
    }
    
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeconfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);
        setMessage("");

        form.validateAll();

        if (checkBtn.context._errors.length === 0) {
            console.log(role);
            if (role == null || role === '') {
                role = [];
            }
            console.log(role);
            UserService.register(
                username,
                role,
                password
            ).then(
                response => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setSuccessful(false);
                    setMessage(resMessage);
                }
            );
        }
    }

    return(
        <>
                <Form
                    onSubmit={handleRegister}
                    ref={c => {
                        setForm(c);
                    }} 
                >
                    {!successful && (
                        <div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="affiliation">Affiliation<span className="text-red-600">*</span></label>
                                    <Select name="affiliation" id="affiliation" onChange={onChangeRole} value={role.label} options={options} placeholder="Choisir affiliation" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="username">Username <span className="text-red-600">*</span></label>
                                    <Input id="username" type="text" className="form-input w-full text-gray-800" placeholder="Enter your username" 
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        validations={[required, vusername]}               
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                                    <Input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-600">*</span></label>
                                    <Input id="confirmPassword" type="password" className="form-input w-full text-gray-800" placeholder="Confirm your password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={onChangeconfirmPassword}
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
                    
                    {message && (
                        <div className="form-group">
                            <div style={{ color: 'red' }}
                                className={
                                    successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                setCheckBtn(c);
                            }}
                        />
                    </Form>
    
                    <div className="flex items-center my-6">
                        <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                        <div className="text-gray-600 italic">Or</div>
                        <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                    </div>
            </>
    );
}

export default SignUpForm

