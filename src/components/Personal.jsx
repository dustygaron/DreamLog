import React from "react";
// import axios from "axios";



export default class Personal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           allFiles: []
        }
    }

    avatar(){
        // console.log('my image')
        console.log(`${this.props.fullName._id}`)
        console.log(`number of files ${this.state.allFiles.length}`)
    }

    render(){
        return(
            <div>
                <nav></nav>
                <div>
                    <div>
                        <img src="" alt="" className="avatarImg"/>
                    </div>
                    <div>
                        <div>
                            <h2>current user name</h2>
                        </div>
                        <div>number of files</div>
                    </div>
                </div>
            </div>
        )
    }
}