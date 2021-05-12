import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  //null --> empty array 
  if (list)  {
    return JSON.parse(localStorage.getItem('list')); 
  }
  else {
    return []; 
  }
}
function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: " ", type: ' ' });
  // It will handle the alert style

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    if (!name) { // if value is empty , it will show the alert 
      // display alert 
      // setAlert({ show: true, msg: 'Please enter value', type: 'danger' }); 

      showAlert(true, 'danger', 'please enter value'); 

    }
    else if (name && isEditing) {
      //deal with edit 

      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }; // it will edit all the whatever id name here. 
        }
        return item; // return all the id 
      }))

      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true , 'success', 'item is changed'); 

    }

    else {
      //show alert 
      showAlert(true, 'success', 'item added to the list'); 
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]); //get the previous list value then add the new list value 
      setName(" "); 
    }

  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  const clearItems = () => {
    showAlert(true, 'danger', 'empty items');
    setList([]); 
  }

  const removeItems = (id) => {
    showAlert(true, 'danger', 'item is removed');
    setList(list.filter((item) => item.id !== id)); 

  }

  const editItems = (id) => { // it will edit whoses it matches 
    const specifiItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specifiItem.title); 
    
  }
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]); 
  return (<section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert}/> }
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g: eggs" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" :"submit"}
        </button>
      </div>
    </form>

    {list.length > 0 && 
    
     <div className="grocery-container">
      <List items={list} removeItems={removeItems} editItems={editItems}/>
        
      <button className="clear-btn" onClick={clearItems}>Clear Items</button>
      
    </div>
      
    }
   

  </section> )
}

export default App

