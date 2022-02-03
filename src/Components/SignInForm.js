import React, { useState } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../Services/User/UserService';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert" style={{ color: 'red' }} >
          This field is required!
        </div>
      );
    }
};

const SignInForm = () => {
  const [username, setUsermame] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState("");
  const [checkBtn, setCheckBtn] = useState("");
  let navigate = useNavigate();

  

  const onChangeUsername = (e) => {
    setUsermame(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    form.validateAll();

    if (checkBtn.context._errors.length === 0) {
      UserService.login(username, password).then(
        () => {
          
          if(UserService.getCurrentUser() == null){
            toast.error("Admin user still being processed, try to login later", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 10000
              });
            
          }
          else{
            toast.success("Login sucess, redirecting in seconds !", {
              position: toast.POSITION.TOP_CENTER,
              onClose: () => {navigate("/home")}
              });
          }
          
          
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  }
  
  return (
    <div>
          <>
                <Form
                    onSubmit={handleLogin}
                    ref={c => {
                        setForm(c);
                      }}
                >
                  <ToastContainer autoClose={2500}/>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="username">Username</label>
                            <Input id="username" type="text" className="border rounded form-input w-full text-gray-800" placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required]}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                            </div>
                            <Input id="password" type="password" className="border rounded form-input w-full text-gray-800" placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}

                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="border rounded form-checkbox" />
                                    <span className="text-gray-600 ml-2">Keep me signed in</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                            
                        </div>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert" style={{ color: 'red' }}>
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
    </div>
  );
}


export default SignInForm
   
    