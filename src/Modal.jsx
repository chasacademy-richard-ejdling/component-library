import React from "react";

export default function Modal({ children, show, onClose, size }) {
    //vet inte vad "onClose" ska göra, eller vara. "onClick" på "Button" i "App.jsx" sköter ju allt med öppna och stänga.
    const header = React.Children.map(children, child => child.type.name === 'Header' ? child : null)
    const body = React.Children.map(children, child => child.type.name === 'Body' ? child : null)
    const footer = React.Children.map(children, child => child.type.name === 'Footer' ? child : null)
    const modalBtn = React.Children.map(children, child => child.type.name === 'Button' ? child : null)

    const sizes = {
        xs: 'w-[250px]',
        sm: 'w-[350px]',
        md: 'w-[450px]',
        lg: 'w-[550px]',
        xl: 'w-[650px]',
        xxl: 'w-[750px]',
    }

    return (
        <>
            {modalBtn}
            <div className={`${show ? '' : 'hidden'} fixed top-0 left-0 bg-black opacity-50 h-screen w-screen z-10`}></div>
                <div className={`${show ? '' : 'hidden'} ${sizes[size]} p-4 rounded-lg bg-slate-800 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}>
                    <div className="pb-4 text-4xl">
                        {header}
                    </div>
                    <hr />
                    <div className="py-4">
                        {body}
                    </div>
                    <hr />
                    <div className="pt-4">
                        {footer}
                    </div>
                </div>
        </>
    )
}

const Header = ({ children }) => children;
Modal.Header = Header

const Body = ({ children }) => children;
Modal.Body = Body

const Footer = ({ children }) => children;
Modal.Footer = Footer