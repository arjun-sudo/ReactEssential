import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
 React.createElement("h1",{style:{color:"blue"}},"Hello!"),
  document.getElementById('root')
);

ReactDOM.render(
<ul>
  <li>Green Tea</li>
  <li>Black Tea</li>
  <li>Milk Tea</li>
  <li>Lomon Tea</li>
</ul>
 );

JSX
 let city={
   name:"Kathmandu",
   country:"Nepal"
 };

 ReactDOM.render(
   <h1 id="heading" className="cool-text">
     {city.name} is in {city.country}
   </h1>,
   document.getElementById("root")

 );

//  Use babaljs to see the componets

Componets 

function Hello(){ //Should be always capital
  return(
    <div>
      <h1>Welcome to React !</h1>
      <p>Let's build something cool.</p>
    </div>
  );

}

ReactDOM.render(
  <Hello/>,
  document.getElementById("root")
);


// Properties

function Hello(props)
{
  console.log(props)
  return(
    <div>
      <h1>Welcome to {props.library} !</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length}  Props Total</p>
    </div>
  );
}

  ReactDOM.render(
    <Hello library="React.js" 
    message="Have fun !"
    number={3}
    />,
    document.getElementById("root")
  );


// Properties in more cleaner way

function Hello({library,message,number})
{

  return(
    <div>
      <h1>Welcome to {library} World !</h1>
      <p>{message}</p>
      <p>{number} Total props</p>
    </div>
  );
}

ReactDOM.render(
  <Hello
  library="React"
  message="Have Fun !"
  number={3}
  />,
  document.getElementById("root")
);


// Composing Compoents


function Lake({name})
{
  return <h1>{name}</h1>;
}
function App(){
  return(
    <div>
      <Lake name="Tilicho Lake"/>
      <Lake name="Fewa Lake"/>
      <Lake name="Rara Lake"/>
    </div>
  );
}

ReactDOM.render
  (
  <App/>,
  document.getElementById("root")
  );



// Rendering Lists

const lakeList=[
  "Rara Lake",
  "Fewa Lake",
  "Tilicho Lake"
];

function App(props)
{
  return (
   <ul>
     {props.lakes.map(lake=> (

     <li>{lake}</li>
      )) }
   </ul>

 );
}

ReactDOM.render
(
  <App lakes={lakeList}/>,

  document.getElementById("root")
);


// Destructuring the above code 

const lakeList=[
  "Rara Lake",
  "Fewa Lake",
  "Tilicho Lake"
];

function App({lakes})
{
  return (
   <ul>
     {lakes.map(lake=> (

     <li>{lake}</li>
      )) }
   </ul>

 );
}

ReactDOM.render
(
  <App lakes={lakeList}/>,

  document.getElementById("root")
);



// Rendering the list of objects 


const lakeList=[
  {id:"1",name:"Rara Lake", place:"Mugu"},
  {id:"2",name:"Phewa Lake",place:"Pokhara"},
  {id:"3", name:"Tilicho Lake", place:"Manang"}
];

function App({lakes})
{
  return(
    <div>
      {lakes.map(lake=>(
        <div>

          <h2>{lake.id} - {lake.name}</h2>
          <p>Location :{lake.place}</p>

          </div>
      ))}
    </div>
  )
}


ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById("root")
)


// Error in console

// Warning: Each child in a list should have a unique "key" prop.



// Adding keys

const lakeList = [
  { id: "1", name: "Rara Lake", place: "Mugu" },
  { id: "2", name: "Phewa Lake", place: "Pokhara" },
  { id: "3", name: "Tilicho Lake", place: "Manang" }
];

function App({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>

          <h2>{lake.id} - {lake.name}</h2>
          <p>Location :{lake.place}</p>

        </div>
      ))}
    </div>
  );
}



ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById("root")
)


// https://reactjs.org/docs/lists-and-keys.html#keys


const list=[1,2,3,4,5];

function App({items})
{
  return (
    <ul>
      {
        items.map(itemkey =>(
          <li key={itemkey.toString()}>{itemkey}</li>
        ))
      }
    </ul>
  )
}


ReactDOM.render(
  <App items={list} />,
  document.getElementById("root")
)


// Conditional Rendering 


function Budi()
{
  return(
    <div>
      <h1>Message me Today !</h1>
    </div>
  );
}

function OffendedBudi()
{
  return(
    <div>
      <h1>Message me Tuesday !</h1>
    </div>
  );
}

function App(props)
{
  if(props.love==="yes")
  {
    return <Budi />;
  }
  else if(props.love==="no")
  {
    return <OffendedBudi/>;
  }
}


ReactDOM.render(
  <App love="no"/>,
  document.getElementById("root")
);


// Conditional Rendering


function Budi({day})
{
  return(
    <div>
      <h1>Message me {day} !</h1>
    </div>
  );
}

function OffendedBudi({day})
{
  return(
    <div>
      <h1>Message me {day} !</h1>
    </div>
  );
}

function App(props)
{
  if(props.love==="yes")
  {
    return <Budi day="Today" />;
  }
  else if(props.love==="no")
  {
    return <OffendedBudi day="Tuesday" />;
  }
}


ReactDOM.render(
  <App love="no"/>,
  document.getElementById("root")
);


// React Fragments

function Budi() {
  return <h1>She is on fire Today !</h1>;
}

function OffendedBudi() {
  return <h1> She posted story in Instagram .!</h1>
}

ReactDOM.render(

  // This tag <> is known as fragment tag
  <>
    <Budi /> <OffendedBudi />
  </>,
  document.getElementById("root")
);

// Array destructuring

const [first,sec,third]=[
  "MoMo",
  "Pizza",
  "Burger"
];

console.log(first);
console.log(sec);
console.log(third);


Also

const [, ,third]=[
  "MoMo",
  "Pizza",
  "Burger"
];

console.log(third);

// Using Use State

function Budi() {
  const [status, setStatus] = useState("Meri Pyari Saani");
  return (
    <div>
      <h1>Meri Budi  :{status}</h1>

    <button onClick={()=>setStatus("Loves me alot .")}>
      Good Thing
    </button>

      <button onClick={() => setStatus("Her Anger .")} >
        Bad Thing
  </button>

  <button onClick={() =>setStatus("She cares me .")}>
    Best Thing
  </button>

    </div>
  );
}

ReactDOM.render(
  <Budi />,
  document.getElementById("root")
);


// Using multiple use state


function Budi() {
  const [days, setDays] = useState(3);
  const [reason, setReason] = useState("I am exited to Know 😇 ");
  const [status, setStatus] = useState("Meri Pyari Saani");
  return (
    <>
      <div>

        <h1>She has new reason for anger in every {days} days.</h1>
        <button onClick={() => setDays(days + 3)}>
          Days She take
        </button>

      </div>

      <div>
        <h1>New reason to get her angry : {reason} </h1>
        <button onClick={() => setReason("Even God doesn't know the reason 😂")}>
          Let's find Reason 
        </button>
      </div>

      <div>

        <h1>Meri Budi  :{status}</h1>

        <button onClick={() => setStatus("Loves me alot .")}>
          Good Thing
         </button>

        <button onClick={() => setStatus("Her Anger .")} >
          Bad Thing
         </button>

        <button onClick={() => setStatus("She cares me .")}>
          Best Thing
        </button>

      </div>
    </>
  );

}

 

//  Working with Use effects 


function Checkbox() {
  const [checked, setCheked] = useState(false);
  useEffect(()=>{
    alert(`checked : ${checked.toString()}`)
  })
  return (
    <>
      <input type="CheckBox"
      value={checked}
      onChange={()=> setCheked(checked => !checked)
      }
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root")
); 


// The use effect Dependency Array 




function App()
{
  const[val,setVal]=useState("");
  const[val2,setVal2]=useState("");

  useEffect(()=>{
    console.log(`field 1:${val}`);
  },[val]);  //dependency array

  // Console maa eeuta matra field aauxa when we type the input 


  useEffect(()=>{
    console.log(`field 2:${val2}`);
  },[val2]);  

  return(
    <>
    <label>
    Favorite Phrase:
    <input value={val}
    onChange={type=>setVal(type.target.value)}
    />
    </label>
    <br/>

    <label>
      Second favorite phrase :
      <input value={val2}
      onChange={type=>setVal2(type.target.value)}
      />
    </label>
    </>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById("root")
); 



// Fetching data with use effect  (GIT HUB)

function GithubUser({login}){

const [data,setData]=useState(null);
useEffect(()=>{
  fetch(`https://api.github.com/users/${login}`)
  .then(res=>res.json())
  .then(setData)
  .catch(console.error);

}, []);

if(data)
{
  // return<div>{JSON.stringify(data)}</div>

  return(
  <div>
    <h1>{data.login}</h1>
    <img src={data.avatar_url} width={100}/>
    
  </div>
  );
}

  return null;

}

function App()
{
  return <GithubUser login="arjun-sudo"/>
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);



// Using useReducer      Below reducing the given code (see next comment)


function CheckBox(){

  const [Checked ,setChecked]=useState(false);

  function toggle(){
    setChecked(Checked=>!Checked);
  }
  

return(
  <>

  <input

  type="Checkbox"
  value={Checked}
  onChange={toggle }
  />
  {Checked ?"checked":"not checked"}


  </>
);



}

ReactDOM.render(
  <CheckBox/>,
  document.getElementById("root")
);




// When useStates get complex we use useReducer as below 

function CheckBox() {

  const [Checked, toggle] = useReducer(
    Checked => !Checked,
    false
  );

  // function toggle(){
  //   setChecked(Checked=>!Checked);
  // }


  return (
    <>

      <input

        type="Checkbox"
        value={Checked}
        onChange={toggle}
      />
      {Checked ? "checked" : "not checked"}


    </>
  );



}

ReactDOM.render(
  <CheckBox />,
  document.getElementById("root")
);



