import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

const persons = ['Sabirul', 'Shumit', 'shimul'];
const products = [
  {name: 'photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          persons.map(name => <li>{name}</li>)
          }
          {
          products.map(item => <li>{item.name}</li>)
          }
        </ul>
        {
        products.map(item => <Products product = {item}></Products>)
        }
        {/* <Products product = {products[0]}></Products>
        <Products product = {products[1]}></Products>
        <Products product = {products[2]}></Products> */}
        <Person name = {persons[0]} job= 'Freelancing'></Person>
        <Person name = 'Shimul' job = 'Outsourcing'></Person>
        <Person name = {persons[1]} job = 'Bekar'></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Products(props){

  const productStyle = {
    margin: '30px',
    padding: '10px',
    border: '1 px solid gray',
    borderRadius: '5px',
    height: 'auto',
    width: 'auto',
    backgroundColor: 'lightgray',
    dispaly: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '5px 5px 5px darkgray'
  }
  const {name, price} = props.product;
  // console.log(props.product);
  return(
    <div style = {productStyle}>
      <h2>Name: {name}</h2>
      <h1>Price:{price}</h1>
      <button>Buy Now</button>
      </div>  
  );

}

function Person(props){

  const PersonStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div style={PersonStyle}>
      <h1>I am {props.name}</h1>
      <h3>Job: {props.job}</h3>
    </div>
  );

}


export default App;
