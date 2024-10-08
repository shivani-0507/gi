import User from "./User"
import React from "react"


class About extends React.Component{
    constructor(props){
         super(props)
    }

    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    <User name= {"Shivani"} age = {"23"}/>
                </div>
            </div>
        )
    }
}


export default About