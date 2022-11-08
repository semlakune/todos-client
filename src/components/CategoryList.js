
export default function CategoryList(props) {
    const { category } = props
    return (
        <li>
            <button className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900 dark:text-slate-400">{category.name}</button>
        </li>
    )
}