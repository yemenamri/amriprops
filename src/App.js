

import logo from './logo.svg';
import './App.css';

import Profildetail from './profile/profildetail';




function App() {
  const version = "16"
  const person = [
    {fullName:"Ahmed Amri"
  ,bio:"Electronic payment Director"
  ,profession:"Electronic payment Director"
,img:"/Ahmed.jpg"},
{fullName:"Med Youssef Amri"
,bio:"Student"
,profession:"Student"
,img:"/Youssef.jpg"},
{fullName:"Yemen Amri"
  ,bio:"Student"
  ,profession:"Student"
,img:"/Yemen.jpg"}
  
  ]
  return (
    <div >
      <Profildetail person = {person}/>
     
    </div>
  );
}

export default App;
