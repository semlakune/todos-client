import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import NavbarComponent from "../components/NavbarComponent";
import CategoryList from "../components/CategoryList";
import {fetchCategories} from "../store/actions/actionCategory";

function Home() {
    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.categoryReducer)

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <>
            <NavbarComponent/>
            <div className={"flex"}>
                <div className={"flex-initial w-2/6 h-screen items-center justify-center flex flex-col"}>
                    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] bottom-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto border-r-4">
                        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
                            <div className="sticky top-0 -ml-0.5 pointer-events-none">
                                <div className="h-8 bg-white"></div>
                                <div className="bg-white pointer-events-auto">
                                    <button className={"all-task hover:text-gray-400"}>All Tasks</button>
                                </div>
                                <div className="h-8 bg-gradient-to-b from-white"></div>
                            </div>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 category-list">
                                {categories.map((category) => {
                                    return <CategoryList category={category} key={category._id} />
                                })}
                            </ul>
                            <div className={"flex flex-row mt-5"}>
                                <button className={"new-category-text hover:text-black"}><span><i className="fa-solid fa-plus mr-3"></i></span>Add Category</button>
                            </div>
                        </nav>
                    </div>
                </div>

                {/*  content  */}
                <div className={"flex-initial w-auto h-screen"}>
                    <div className={"hidden lg:block fixed z-20 inset-0 top-[5rem] bottom-[5rem] left-auto right-auto w-auto pb-10 px-8 overflow-y-auto"}>
                        <h1 className={"font-bold text-6xl"}>content</h1>
                        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
                            <ul className={"space-y-6 mt-10 text-2xl"}>
                                <li>
                                    <label className={"gg-c-checkbox"}>
                                        <input onChange={() => setIsChecked(!isChecked)} type="checkbox" className={"gg-c-checkbox__checkbox"} name=""/>
                                        <span className={"gg-c-checkbox__pseudo-checkbox"}></span>
                                        <span className={"gg-c-checkbox__text"}>Buy Bananas</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="51" className="gg-c-checkbox__shine">
                                            <g fillRule="evenodd">
                                                <rect width="8" height="2" x="48" y="24" rx="2"/>
                                                <rect width="8" height="2" x="11.73" y="2.46" rx="2"
                                                      transform="rotate(60 15.73 4.46)"/>
                                                <rect width="8" height="2" x="35.73" y="2.46" rx="2"
                                                      transform="rotate(120 39.73 4.46)"/>
                                                <rect width="8" height="2" x="12" y="45" rx="2"
                                                      transform="scale(1 -1) rotate(60 97.4 0)"/>
                                                <rect width="8" height="2" x="36" y="45" rx="2"
                                                      transform="scale(-1 1) rotate(-60 0 116.28)"/>
                                                <rect width="8" height="2" y="24" rx="2"/>
                                            </g>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home