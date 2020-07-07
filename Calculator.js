import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      result: 0,
    };
  }
  handleA = (e) => {
    this.setState({
      a: e.target.value,
    });
  };
  handleB = (e) => {
    this.setState({
      b: e.target.value,
    });
  };
  findSum = (e) => {
        this.setState({
        result: parseInt(this.state.a) + parseInt(this.state.b)
        });
    };

    findSub = (e) =>{
        this.setState({
        result: parseInt(this.state.a) - parseInt(this.state.b)
        });
    };


    findMul = (e) =>{
        this.setState({
        result: parseInt(this.state.a) * parseInt(this.state.b)
        });
    };

    findDiv = (e) =>{
        this.setState({
        result: parseInt(this.state.a) / parseInt(this.state.b)
        });
    };
    
    findMod = (e) =>{
        this.setState({
        result: parseInt(this.state.a) % parseInt(this.state.b)
        });
    };
  render() {
    return (
      <div><br/> <br/>
        <label>Enter First Number</label>
        <input type="number" onChange={this.handleA} />
        <br />
        <label>Enter First Number</label>
        <input type="number" onChange={this.handleB} />
        <br /><br/>
        <button onClick={this.findSum}> ADD </button> 
        <button onClick={this.findSub}> SUB </button>
        <button onClick={this.findMul}> MUL </button>
        <button onClick={this.findDiv}> DIV </button>
        <button onClick={this.findMod}> MOD </button> <br /><br/>
        Result: {this.state.result} <br />
      </div>
    );
  }
}

