import { createContext, useState, useEffect } from "react";

export const Context = createContext()

const ContextProvider = (props) => {
    // const [criteria, setCriteria] = useState()

    // useEffect(() => {
    //     fetch('/criteria.json')
    //     .then((response) => response.json())
    //     .then((data) => setCriteria(data))
    // }, [])
    let criteria = [
        {
            "title": "scalability",
            "weight": 0,
            "total_score": 0
        },
        {
            "title": "adaptability",
            "weight": 0,
            "total_score": 0
        },
        {
            "title": "easy-of-use",
            "weight": 0,
            "total_score": 0
        },
        {
            "title": "price",
            "weight": 0,
            "total_score": 0
        }
    ]

    return (
        <Context.Provider value={{
            criteria
        }}>
            {props.children}
        </Context.Provider>
    )

}


export default ContextProvider