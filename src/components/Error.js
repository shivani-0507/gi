import { useRouteError } from "react-router-dom"
const Error = () =>{
    const error = useRouteError()
    return (
        <div>
            <p>
                Oops spmething went wrong
            </p>
            <h3>{error.status}</h3>
        </div>
    )
}

export default Error