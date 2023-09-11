import { Component } from "react";
import "./input.css"


class Input extends Component {

    state = {
        name: "",
        gender: "",
        birthDate: "",
        email: "",
        mobile: "",
        id: ""
    }

    render() {
        return (
            <div className="input">
                <div className="container">
                    <div>
                        <span>Name</span>
                        <input type="text" placeholder="Enter Your name" />
                    </div>

                    <div>
                        <span>Gender</span>
                        <input type="radio" value="Male" />
                        <label>Male</label>
                        <input type="radio" value="Female" />
                        <label>Female</label>
                    </div>

                    <div>
                        <span>Date of birth</span>
                        <input type="date" />
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="text" placeholder="Enter Your email" />
                    </div>
                    <div>
                        <span>Mobile</span>
                        <input type="text" placeholder="Enter Your phone" />
                    </div>
                    <div>
                        <span>Id</span>
                        <input type="text" placeholder="Enter Your id" />
                    </div>
                    <div className="btn">
                        <button className="cancel-btn">Cancel</button>
                        <button className="save-btn">Save</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Input