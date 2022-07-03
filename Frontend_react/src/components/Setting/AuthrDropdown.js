import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['MASTER', '정보 열람','정보 열람/삭제'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={value}

        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        
        id="controllable-states-demo"
        options={options}
        sx={{ width: 160 }}
        renderInput={(params) => <TextField {...params} label=" " />}
      />
    </div>
  );
}
