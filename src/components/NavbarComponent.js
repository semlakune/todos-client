import {useNavigate} from "react-router-dom";

export default function NavbarComponent() {
    const navigate = useNavigate()
    const logoutAction = () => {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <div
            className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 z-50 bg-white/95 supports-backdrop-blur:bg-white/60">
            <div className="max-w-8xl mx-auto">
                <div className="py-4 px-8 border-0 mx-4 lg:mx-0">
                    <div className="relative flex items-center">
                        <div>
                            {/*  title  */}
                        </div>
                        <div className="relative hidden lg:flex items-center ml-auto">
                            <button onClick={logoutAction} className={"ml-3 text-md leading-5 font-medium text-red-600 dark:text-red-400 bg-red-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-red-400/20"}><span><i
                                className="fa-solid fa-right-from-bracket mr-2"></i></span>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}