import React, {useState} from 'react';

import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

import UserService from '../Services/User/UserService';

const SettingsProfileUser = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const id = UserService.getCurrentUser().id;
    const [username, setUsername] = useState(UserService.getCurrentUser().username);
    const [password, setPassword] = useState(UserService.getCurrentUser().password);
    const [email, setEmail] = useState(UserService.getCurrentUser().email);

    // ghir for test above

    const [logo, setLogo] = useState(null)
    const [coverImg, setCoverImg] = useState(null)

    const onCoverImgChange = event => {
        setCoverImg(event.target.files[0])
    };

    const onLogoChange = event => {
        setLogo(event.target.files[0]);
    };

    function handleEntailmentRequest(e, num) {
        e.preventDefault();
        if (num === 1){
            onCoverImgChange(e);
        }     
        else
            onLogoChange(e);
    }

    function handleSubmit(e) {
        e.preventDefault();
        UserService.uploadLogoAndCover(coverImg, logo, id);
        UserService.updateUser(username, password, email, id);
    }

    function handleUsername(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }
    
    return (
        <div className="lg:col-span-5 mb-5 h-auto border-gray-300 rounded-xl border">
            <div className="mx-auto">
                <form name="settings_profile" id="settings_profile" onSubmit={handleSubmit}>
                    <div className="py-4 px-8">
                        <div className="block text-grey-darker text-lg font-bold mb-2">
                            Profile Settings
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Username:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="student_user" id="student_user" defaultValue={username} onChange={handleUsername}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Password:</label>
                            <Input
                                className=" border rounded w-full py-2 px-3 text-grey-darker"
                                type={passwordShown ? "text" : "password"}
                                onChange={handlePassword}
                                value={password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={togglePassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {passwordShown ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">E-mail:</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="email"
                                name="student_email" id="student_email" defaultValue={email} onChange={handleEmail} />
                        </div>

                        <div className="mb-4">
                            <label 
                                className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                            >
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal uppercase">Select a Logo</span>
                                <input type='file' className="hidden" onChange={(e) => handleEntailmentRequest(e, 2)}/>

                                {logo === null ? <span>No file choosen</span> : <span>{logo.name}</span>}
                            </label>
                        </div>

                        <div className="mb-4">
                            <label 
                                className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-700 hover:text-white"
                            >
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal uppercase">Select a Cover Image</span>
                                <input type='file' className="hidden" onChange={(e) => handleEntailmentRequest(e, 1)}/>

                                {coverImg === null ? <span>No file choosen</span> : <span>{coverImg.name}</span>}
                            </label>
                        </div>

                        <button 
                            type="submit"
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Update Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsProfileUser;
