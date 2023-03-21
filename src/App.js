import './App.css';
import Header from './components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[data, setData] = useState([]);


  const addData = () => {
    setData([... data,{
      name: name,
      email: email
    }])
    setName("");
    setEmail("");
  }

  const removeItem =(index) =>{
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);


  }
  
  return (
    <div className="App">
      <Header />
      <div className="input-el">
        <Stack spacing={2} direction="row">
          <TextField  
          value={name} 
          id="outlined-basic" 
          label="Name" 
          variant="outlined"
          onChange={(event)=> setName(event.target.value)}

          />
          <TextField 
          value={email} 
          id="outlined-basic" 
          label="E-mail" 
          variant="outlined" 
          onChange={(event)=> setEmail(event.target.value)}
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data-val">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>

        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className="data-val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button  onClick={() => removeItem(index)} variant="outlined" color="error">
            <DeleteIcon />
          </Button>
    
        </div>
            )
          })
        }

      </div>
      
      
    </div>
  );
}

export default App;
