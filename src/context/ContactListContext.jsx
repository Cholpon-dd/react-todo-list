import React, { createContext, useState, useEffect } from 'react'


export const ContactListContext = createContext()

const ContactListContextProvider = (props) => {
    
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [number, setNumber] = useState(0)

    const [editItem, setEditItem] = useState(null)

    const addContact = (contact) => {
        setName([...name, {contact, id:  Math.floor(Math.random() * 10000)}])
    }
    return (
        <TaskListContext.Provider value={{name,
        addContact}}>

            {props.children}
        </TaskListContext.Provider>
    )
}

export default ContactListContext