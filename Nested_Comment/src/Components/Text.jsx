const Text = ({ className, children }) => {
    return <p className={`${className}font-medium text-xl`} >{children}</p>
}

export default Text;