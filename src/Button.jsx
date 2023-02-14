export default function Button({ children, size, color, disabled, onClick }) {
    function showDisabled(boolean) {
        return boolean ? 0.5 : 1
    }
    
    return (
        <button onClick={onClick} className='w-fit' style={{ backgroundColor: color, fontSize: size, opacity: showDisabled(disabled) }} disabled={disabled}>{children}</button>
    )
}