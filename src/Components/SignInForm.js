import React from 'react'

const SignInForm = () => {
    return (
        <>
            <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <div className="flex justify-between">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        </div>
                        <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
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
                    <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                    </div>
                </div>
            </form>

            <div className="flex items-center my-6">
                <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                <div className="text-gray-600 italic">Or</div>
                <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
            </div>
        </>
    )
}

export default SignInForm
