import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'

function App() {
  let [binary, setBinary] = React.useState('00000000');
  let [decimal, setDecimal] = React.useState('');

  const convert = (event) =>{
    decimal = parseInt(binary,2);
    setDecimal(decimal);
  }

  const handleChange = (event) => {
    let isChecked = event.target.checked;
    const item = event.target.name;
    
    let binaryArr = binary.split("");

    if(isChecked === true){
      binaryArr[item-1] = '1';
      binary = binaryArr.join("");
      setBinary(binary);
    }
    else{
      binaryArr[item-1] = '0';
      binary = binaryArr.join("");
      setBinary(binary);
    }
  }

  return (
    <Box>
      <Paper style={{width: 350, textAlign: 'center'}} variant="outlined">
        <Box>
          <CheckBox name={"1"} onChange={handleChange}></CheckBox>
          <CheckBox name={"2"} onChange={handleChange}></CheckBox>
          <CheckBox name={"3"} onChange={handleChange}></CheckBox>
          <CheckBox name={"4"} onChange={handleChange}></CheckBox>
          <CheckBox name={"5"} onChange={handleChange}></CheckBox>
          <CheckBox name={"6"} onChange={handleChange}></CheckBox>
          <CheckBox name={"7"} onChange={handleChange}></CheckBox>
          <CheckBox name={"8"} onChange={handleChange}></CheckBox>
        </Box>
        <br></br>
        <Box><TextField id={"binary"} size="small" variant="outlined" disabled={true} value={binary} /></Box>
        <br></br>
        <Box><Button variant="contained" onClick={convert} >convert</Button></Box>
        <br></br>
        <Box><TextField id={"decimal"} size="small" variant="outlined" disabled={true} value={decimal} /></Box>
        <br></br>
      </Paper>
    </Box>
  );
}

export default App;
