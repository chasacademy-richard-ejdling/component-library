import { useState } from "react"

export default function Alert({ children, color, icon, onDismiss }) {
    const [hidden, setHidden] = useState(true)

    function handleClick() {
        hidden ? setHidden(false) : setHidden(true)
    }

    function handleClose() {
        handleClick()
        onDismiss()
    }

    return (
        <>
            <button onClick={handleClick}>Click for Alert</button>
            <section className={`flex gap-1 items-center ${hidden ? 'hidden' : ''} fixed top-0 left-0 m-8`} style={{ backgroundColor: color }}>
                <i className="ml-2">{icon}</i>
                <p>{children}</p>
                <button onClick={handleClose} className='border-white border p-0 m-2' style={{ backgroundColor: color }}>Close</button>
            </section>
        </>
    )
}