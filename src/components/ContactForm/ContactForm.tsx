import { FormEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import {
  ContactsForm, ButtonTest, Text
} from './ContactForm.styled';
import { Button, TextField } from '@mui/material';
import { AppDispatch } from "../../redux/store";

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  number: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const ContactForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector(selectContacts);
  const contactNames = contacts.map(contact => contact.name);

  const handleSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const name = form.name.value;
    const number = form.number.value;
    const isExist = contactNames.includes(name);
    if (isExist) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({name, number}));
    }
    event.currentTarget.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
        <TextField
        label="Name"
        variant='standard'
        margin='normal'
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
        label="Number"
        variant='standard'
        margin='normal'
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      <Button variant="contained" type="submit">Add contact</Button>
      <ButtonTest><Text>Send message</Text></ButtonTest>
    </ContactsForm>
  );
};
