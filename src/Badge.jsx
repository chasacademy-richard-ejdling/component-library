export default function ({ color, size, icon, children}) {


    return (
        <div className="flex items-center rounded-full w-fit px-2 py-1 gap-1" style={{ backgroundColor: color, fontSize: size}}>
            <i>{icon}</i>
            <p>{children}</p>
        </div>
    )
}