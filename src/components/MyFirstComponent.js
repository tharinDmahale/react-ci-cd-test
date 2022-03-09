import React, {Component} from "react";

class MyFirstComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {

            templateStringAttribute: "string",
            templateIntAttribute: 0
        }
    }

    render() {

        return (
            <div className="MyFirstComponent">
                <p>Hello World!</p>
            </div>
        );
    }
}

export default MyFirstComponent;
