import React from "react";

export default class ErrorComp extends React.Component{
    state ={
        counter: 0
    }

    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    render(){
        if(this.state.counter === 5){
            throw new Error ("Ha! gotcha!🤭")
        }
        return(
            <div className="error_boundary">
                <h1> Let's count to 10! </h1>
                <button className="error_btn"> {this.state.counter} </button>
                <button className="error_click_btn" onClick={this.handleClick}> + </button>
            </div>
        )
    }
}
