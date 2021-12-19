import React from 'react'

const SignUpForm = () => {
    return (
        <>
            <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                        <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                        <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                        <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
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
                </form>

                <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
        </>
    )
}

export default SignUpForm
