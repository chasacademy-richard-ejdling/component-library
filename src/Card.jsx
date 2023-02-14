export default function Card({href, imgSrc, imgAlt, children}) {
    return(
        <a href={href} target="_blank" className="block rounded-lg overflow-hidden text-white hover:text-white border-slate-600 border h-fit w-56 bg-slate-800 hover:bg-slate-600">
            <img src={imgSrc} alt={imgAlt} className='h-24 w-full object-cover' />
            {children}
        </a>
    )
}