import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



class App extends Component {
 boo: boolean = true;
 constructor(props)
 {super(props)
  console.log("We are in the constructor method")
   this.state ={

 hello:
 [
   {name:"Sapna", company: "mindtree"},
   {name:"Soumya", company: "mindtree"},
   {name:"Shraddha", company: "tcs"}
   
 ],
 showPerson:false}
 }
 static getDerivedStateFromProps(props, state)
 {
   console.log('We are the derived state method')
   return state;
 }
 shouldComponentUpdate(nextProps, nextState)
 {
   console.log("We are in should component update")
   return true;
 }
 getSnapshotBeforeUpdate(prevProps, prevState)
 {
   console.log("We are getSnapshotBeforeUpdate")
 }
 componentDidUpdate()
 {
   console.log("We are in componentDidUpdate")
 }
 switchHandler= () =>
 {
   this.setState({
 hello:
 [
   {name:"Sap", company: "mind"},
   {name:"Sou", company: "mind"},
   {name: "Shradz", company: "TCS"}
   
 ]
     }
   )
 }
 clickHandler= () =>
 {
    console.log("Hey");
 }
  onChangeHandler= () =>
 {
   this.setState({
 hello:
 [
   {name:"Sap", company: "mind"},
   {name:"Sou", company: "mind"},
   {name: event.target.value, company: "TCS"}
   
 ]
     }
   )
 }
toggleHandler= () =>
{
   
   this.boo= this.state.showPerson
    this.setState({
      showPerson: !this.boo
    })
    
}
componentDidMount()
{
  console.log("We are in the component did mount method")
}


  render() { console.log("We are in rendering")
    return (
      <div>
      <button onClick={this.toggleHandler}>Toggle Me</button>
      {this.state.showPerson ?
      <div>
        <Hello name={this.state.hello[0].name} company={this.state.hello[0].company}/>
        <Hello name={this.state.hello[1].name} company={this.state.hello[1].company}> Welcome, we were waiting </Hello>
          <Hello name={this.state.hello[2].name} company={this.state.hello[2].company}
        click={this.clickHandler} change={this.onChangeHandler} />  
        </div>: null}
         <p>
        <button onClick={this.switchHandler}> Click to see magic </button>
        <br/>  <br/>
        <input type="text" onChange={this.onChangeHandler} />
        <br/> <br/>
          Start editing to see some magic happen :)
        </p>
        {this.state.hello.map((hel, index)=>
      {
        return <Hello name={hel.name} age={hel.company} key={hel.name}/>
      })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
