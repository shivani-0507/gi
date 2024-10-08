import React from "react";
import {GITHUB_URL} from "../utils/constants";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "dummy",
                location: "data"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch(GITHUB_URL);
        const json = await data.json()
        this.setState(
            { userInfo: json }
        )
    }
    render() {
        const { name, url, followers, following, avatar_url } = this.state.userInfo;
        return (
            <div>
                <div className="image-container">
                <img src={avatar_url} style={{ height: "200px", width: "200px", align:"center" }} />
                </div>
            <div className="user-info">
                <p>Name: {name}</p>
                <p>Followers: {followers}</p>
                <p>Followings:{following}</p>
                <p>Github Url:{url}</p>
           </div>

            </div>
        )
    }
}

export default User