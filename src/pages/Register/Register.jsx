import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Register = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleCaptcha = () => {
        const captchaValue = captchaRef.current.value
        console.log(captchaValue);
        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="w-1/5 mx-auto content-center h-screen">
            <div>
                <h2 className="text-3xl font-semibold text-center mb-2 uppercase">Register</h2>
                <p className="text-center mb-6">Welcome to Bistro Boss Restaurant</p>
                <div>
                    <form className="space-y-3">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" name="name" className="grow" placeholder="Username" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" name="email" className="grow" placeholder="Email" required />
                        </label>
                        <input type="file" name="image" className="file-input file-input-bordered w-full" required accept="image/*" />
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" name="password" placeholder="Password" className="grow" />
                        </label>
                        <div>
                            <label>
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input onBlur={handleCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="Type Captcha" className="grow w-full input input-bordered" />
                        </div>
                        <button disabled={disabled} className="btn btn-block">Sign Up</button>
                    </form>
                    <div className="text-center my-4">Signup with social accounts</div>
                    <button className="btn btn-block"><FcGoogle className="text-4xl"></FcGoogle>Continue with Google</button>
                    <p className="text-center mt-3">Already have an account? <Link className="text-blue-500 font-bold" to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;