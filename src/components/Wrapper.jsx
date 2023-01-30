export const Wrapper = ({ style, children }) => {
    return (
        <div className={`flex flex-col items-center gap-12 bg-transparent-500 w-full ${style}`}>
            { children }
        </div>
    )
}