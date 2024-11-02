const Action = ({ name, onClick }) => {
    return <button className="border-gray-100 rounded-md bg-blue-600 text-white ml-2 px-3" onClick={onClick}>{name}</button>
}

export default Action;