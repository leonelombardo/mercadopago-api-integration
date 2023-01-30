export const Container = ({ style, children }) => {
    return (
        <div className={`max-w-[1200px] w-full flex flex-col items-center gap-12 py-6 px-12 ${style}`}>
            { children }
        </div>
    )
}