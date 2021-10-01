import React from 'react'

export const Footer = () => {
    let footerstyle={
        padding: "4px 0px"
    }
    return (
        <footer className="bg-dark text-light " style={footerstyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
