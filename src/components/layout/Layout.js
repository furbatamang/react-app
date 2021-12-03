import React from 'react'

const Layout = (props) => {
    return (
        <div className="flex flex-1 overflow-hidden h-screen w-screen">
            {props.children}
        </div>
    )
}

export default Layout
