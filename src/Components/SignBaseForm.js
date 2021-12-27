import React from 'react'
import { Link } from 'react-router-dom'

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const SignBaseForm = ({flag}) => {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">{ flag ? "Welcome back." : "Welcome." }</h1>
                    </div>

                    <div className="max-w-sm mx-auto">
                        {flag ? <SignInForm /> : <SignUpForm />}

                        <form>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                <button 
                                    className="btn px-0 text-white bg-blue-900 hover:bg-blue-800 w-full relative flex items-center"
                                >
                                    <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643h2.516V4.458z"/>
                                    </svg>
                                    <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Facebook</span>
                                </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                <button 
                                    className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                                >
                                    <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                                    </svg>
                                    <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                                </button>
                                </div>
                            </div>
                        </form>

                        <div className="text-gray-600 text-center mt-6">
                            { flag ? <div>
                                    Don't you have an account?{" "}
                                <Link to="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">
                                    Sign up
                                </Link>
                            </div> : <div>
                                Already using Simple?{" "}
                                <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">
                                    Sign in
                                </Link>
                            </div> }
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignBaseForm