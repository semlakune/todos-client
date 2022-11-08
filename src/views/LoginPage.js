import { useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginHandler} from "../store/actions/actionUser";
import mainImg from "../assets/main-img.png"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loginForm, setLoginForm] = useState({
        username: "", password: "",
    });
    const [isVisible, setIsVisible] = useState(false)

    const loginAction = (e) => {
        e.preventDefault();
        dispatch(loginHandler(loginForm))
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                navigate("/")
            })
    };

    if (localStorage.access_token) {
        return <Navigate to="/"/>;
    }
    return (
        <div className={"flex flex-row"}>
            <div className={"basis-3/4 bg-neutral-50 h-screen overflow-hidden"}>
                <div className={"vector-top"}></div>
                <h1 className={"todo-text"}>TO DO LIST</h1>
                <img src={mainImg} alt="todos" className={"img"}/>
                <div className={"vector-bottom"}></div>
            </div>
            <div className={"basis-1/3 right-section"}>
                <h1 className={"welcome-text"}>Welcome to To Do List <span>👋</span></h1>
                <p className={"sub-welcome"}>Please sign-in to your account, and start manage further</p>
                <h1 className={"sign-in-text"}>Sign In</h1>
                <form className={"space-y-4 md:space-y-6 form-login"} onSubmit={loginAction}>
                    <div>
                        <label htmlFor="username" className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Username</label>
                        <input onChange={(e) => {
                            setLoginForm({...loginForm, username: e.target.value})
                        }} value={loginForm.username} type="text" name="username" id="username" className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Your registered username"/>
                    </div>
                    <div>
                        <label htmlFor="password" className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Password</label>
                        <div className={"flex flex-row"}>
                            <input onChange={(e) => {
                                setLoginForm({...loginForm, password: e.target.value})
                            }} value={loginForm.password} type={isVisible ? "text" : "password"} name="password" id="password" placeholder="••••••••" className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}/>
                            {isVisible ?
                            <span onClick={() => setIsVisible(!isVisible)}>
                                <i className="fa-solid fa-eye absolute mt-3 pt-0.5 right-20 text-gray-600"></i>
                            </span>
                                :
                            <span onClick={() => setIsVisible(!isVisible)}>
                                <i className="fa-solid fa-eye-slash absolute mt-3 pt-0.5 right-20 text-gray-600"></i>
                            </span>
                            }

                        </div>
                    </div>
                    <button type="submit"
                            className={"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Sign in
                    </button>
                    <p className={"text-sm font-light text-gray-500 dark:text-gray-400"}>
                        Don’t have an account yet? <button onClick={() => {
                            navigate("/register")
                    }} className={"font-medium text-blue-600 hover:underline dark:text-blue-500"}>Sign
                        up</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
