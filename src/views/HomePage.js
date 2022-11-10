import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import NavbarComponent from "../components/NavbarComponent";
import CategoryList from "../components/CategoryList";
import {addCategory, fetchCategories, fetchCategoryDetail} from "../store/actions/actionCategory";
import { fetchAllTask, fetchTasks} from "../store/actions/actionTodo";
import TaskComponent from "../components/TaskComponent";

function Home() {
    const dispatch = useDispatch()
    const {categories} = useSelector((state) => state.categoryReducer)

    const [showModal, setShowModal] = useState(false)
    const [newCategory, setNewCategory] = useState({
        name: "",
    })
    const [isAll, setIsAll] = useState(null)

    const addCategoryAction = (e) => {
        e.preventDefault()
        dispatch(addCategory(newCategory))
            .then((_) => {
                dispatch(fetchCategories())
                setShowModal(false)
            })
            .catch((err) => console.log(err))
    }


    const taskHandler = (payload) => {
        setIsAll(false)
        dispatch(fetchTasks(payload))
            .then((_) => {
                dispatch(fetchCategoryDetail(payload))
            })
    }

    useEffect(() => {
        dispatch(fetchAllTask())
        dispatch(fetchCategories())
            .then((_) => {
                setIsAll(true)
            })
    }, [dispatch])
    return (
        <div className={"main"}>
            <NavbarComponent/>

            {/* Add Category Modal */}
            <div className={`${!showModal && 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className={"m-auto mt-64 p-4 w-full max-w-md h-full md:h-auto"}>
                    <div className="relative bg-neutral-200 rounded-lg shadow">
                        <button onClick={() => setShowModal(!showModal)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">

                                </path>
                            </svg>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Category</h3>
                            <form onSubmit={addCategoryAction} className={"space-y-6"}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category Name</label>
                                    <input value={newCategory.name} onChange={(e) => {
                                        setNewCategory({...newCategory, name: e.target.value})
                                    }} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="School"/>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex"}>
                {/* sidebar/categories */}
                <div className={"flex-initial w-2/6 h-screen items-center justify-center flex flex-col"}>
                    <div
                        className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] bottom-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto border-r-4 mt-20">
                        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
                            <div className="sticky top-0 -ml-0.5 pointer-events-none">
                                <div className="h-8 bg-white"></div>
                                <div className="bg-white pointer-events-auto">
                                    <button onClick={() => {
                                        dispatch(fetchAllTask())
                                        setIsAll(true)
                                    }} className={"all-task hover:text-blue-500"}>All Tasks</button>
                                </div>
                                <div className="h-8 bg-gradient-to-b from-white"></div>
                            </div>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 category-list">
                                {categories.map((category) => {
                                    return <CategoryList taskHandler={taskHandler} category={category} key={category._id}/>
                                })}
                            </ul>
                            <div className={"flex flex-row mt-5"}>
                                <button onClick={() => {
                                    setNewCategory({...newCategory, name: ""})
                                    setShowModal(!showModal)
                                }} className={"new-category-text hover:text-black"}>
                                    <span><i className="fa-solid fa-plus mr-3"></i></span>Add Category
                                </button>

                            </div>
                        </nav>
                    </div>
                </div>

                {/*  content/tasks  */}
                <TaskComponent isAll={isAll}/>
            </div>
            <div className={"vector-home-top"}></div>
            <div className={"vector-home-bottom"}></div>
        </div>
)

}

export default Home