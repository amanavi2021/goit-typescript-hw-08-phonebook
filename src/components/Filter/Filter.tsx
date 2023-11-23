import { ChangeEvent } from "react";
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
 
  const handleFilterChange = (event:ChangeEvent<HTMLInputElement>) => {
   dispatch(updateFilter(event.currentTarget.value))
  };

  return (
           <TextField label="Find contacts by name" focused type="text" onChange={handleFilterChange} />
  );
};

