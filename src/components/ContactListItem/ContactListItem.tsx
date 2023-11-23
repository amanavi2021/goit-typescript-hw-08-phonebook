import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
// import PropTypes from 'prop-types';
import { FC } from 'react';
import {Button, ListItem , ListItemText, ListItemIcon } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { Contact } from "../../redux/contacts/contactsSlice";
import { AppDispatch } from '../../redux/store';
interface ContactListItemProps {
    contact: Contact;
}

export const ContactListItem: FC<ContactListItemProps> = ({ contact }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { name, number, id } = contact;
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <ListItem>
            <ListItemIcon>
            <Phone fontSize='large' color='primary'/>
            </ListItemIcon>
            <ListItemText>
            <span>{name}</span>: <span>{number}</span>   
            </ListItemText>
            
             <Button 
             variant='outlined' 
             type='button' 
             className='ContactList_btn'
             onClick={handleDelete}
             >Delete</Button>   
        </ListItem>
    )
};



