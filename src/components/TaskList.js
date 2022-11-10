import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoryDetail} from "../store/actions/actionCategory";
import {updateTask} from "../store/actions/actionTodo";

export default function TaskList(props) {
    const dispatch = useDispatch()
    const { task } = props

    const [status, setStatus] = useState("")

    const updateStatusAction = (payload) => {
        dispatch(updateTask(payload))
            .then((_) => {
                dispatch(fetchCategoryDetail(task.categoryId))
            })
    }

    useEffect(() => {
        dispatch(fetchCategoryDetail(task?.categoryId))
            .then((_) => {
                setStatus(task.status)
            })
    },[])

    return (
        <li>
            <label className={"gg-c-checkbox"}>
                <input onChange={(e) => {
                    if (status === 'complete') {
                        setStatus("uncomplete")
                        updateStatusAction({
                            id: task._id,
                            status: 'uncomplete'
                        })
                    }
                    else {
                        setStatus("complete")
                        updateStatusAction({
                            id: task._id,
                            status: 'complete'
                        })
                    }

                }} type="checkbox" className={"gg-c-checkbox__checkbox"} name="" checked={status === 'complete' ? true : false}/>
                <span className={"gg-c-checkbox__pseudo-checkbox"}></span>
                <span className={`gg-c-checkbox__text ${status === 'complete' && 'line-through text-red-500'} mr-3`}>{task.task}</span>
                <button className={"p-2 text-sm bg-blue-400 rounded-full"}>category name</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="51"
                     className="gg-c-checkbox__shine">
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
    )
}