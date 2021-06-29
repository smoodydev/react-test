import React from "react"

export default class StateBasedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    setCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }

        })
    }
    
    render() {
        return (
            <div>{this.state.count} <button onClick={this.setCount}>Hello</button></div>
        )
    }
}
