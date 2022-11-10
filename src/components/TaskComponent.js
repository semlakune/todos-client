import TaskList from "./TaskList";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTask, fetchTasks} from "../store/actions/actionTodo";

export default function TaskComponent(props) {
    const { isAll } = props
    const dispatch = useDispatch()
    const {tasks, allTask} = useSelector((state) => state.todoReducer)
    const {category} = useSelector((state) => state.categoryReducer)
    const [isFocus, setIsFocus] = useState(false)
    const [newTask, setNewTask] = useState({
        task: "",
        categoryId: ""
    })

    const addTaskAction = (e) => {
        e.preventDefault()
        dispatch(addTask(newTask))
            .then((_) => {
                dispatch(fetchTasks(newTask.categoryId))
                setNewTask({task: "", categoryId: ""})
            })
    }


    return (
        <div className={"flex-initial w-auto h-screen"}>
            <div
                className={"hidden lg:block fixed z-20 inset-0 top-[5rem] bottom-[5rem] left-auto right-auto w-auto pb-10 px-8 overflow-y-auto"}>
                <h1 className={"font-bold text-6xl"}>{!isAll ? category.name : "All Task"}</h1>
                {/* add new task */}
                {!isAll ?
                    <form onSubmit={addTaskAction}>
                        <div className={"flex flex-row justify-end items-center"}>
                            <input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}
                                   value={newTask.task}
                                   onChange={(e) => {
                                       setNewTask({
                                           ...newTask,
                                           task: e.target.value,
                                           categoryId: category._id
                                       })
                                   }}
                                   className={"add-task bg-neutral-300 text-neutral-400 text-left rounded-lg mt-5 p-3 focus:text-black"}
                                   placeholder={"Add new task"}/>
                            {isFocus &&
                                <button onMouseDown={addTaskAction} type="button" className={"absolute mt-6 mr-6"}><i
                                    className="fa-solid fa-circle-plus text-2xl text-neutral-500"></i></button>
                            }
                        </div>
                    </form>
                    :
                    null
                }
                <nav id="nav" className="lg:text-sm lg:leading-6 relative">
                    {!isAll ?
                        <ul className={"space-y-6 mt-10 text-2xl"}>
                            {tasks?.map((task) => {
                                return <TaskList task={task} key={task._id} />
                            })}
                        </ul>
                        :
                        <ul className={"space-y-6 mt-10 text-2xl"}>
                            {allTask?.map((allTask) => {
                                return <TaskList task={allTask} key={allTask._id} />
                            })}
                        </ul>
                    }
                </nav>
            </div>
        </div>
    )
}