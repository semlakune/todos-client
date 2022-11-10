import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteCategory, fetchCategories} from "../store/actions/actionCategory";
import {fetchAllTask} from "../store/actions/actionTodo";

export default function CategoryList(props) {
    const { category, taskHandler } = props
    const dispatch = useDispatch()
    const [isFocus, setIsFocus] = useState(false)

    const deleteCategoryHandler = (idCategory) => {
        dispatch(deleteCategory(idCategory))
            .then((_) => {
                dispatch(fetchAllTask())
                dispatch(fetchCategories())
            })
            .catch((err) => console.log(err))
    }

    return (
        <li className={"flex flex-row"}>
            <button onClick={() => taskHandler(category._id)} className="flex-1 text-left border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-900 hover:text-blue-500 focus:border-slate-400 focus:text-blue-500" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>{category.name}</button>
            {isFocus && <button onMouseDown={() => {
                deleteCategoryHandler(category._id)
                window.location.reload(false)
            }} ><span className={"align-middle text-right text-red-600 text-sm"}><i className="fa-solid fa-trash-can"></i></span></button>}
        </li>
    )
}