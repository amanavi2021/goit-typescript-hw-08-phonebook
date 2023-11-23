// import { FormEvent} from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form } from "./RegisterForm.styled";
import { TextField, Button } from "@mui/material";
// import { AppDispatch } from "../../redux/store";

// interface CustomElements extends HTMLFormControlsCollection {
//     name: HTMLInputElement;
//     email: HTMLInputElement;
//     password: HTMLInputElement;
// }

// interface CustomForm extends HTMLFormElement {
//     readonly elements: CustomElements;
// }

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget.elements;

        const user =
        {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };
        
        dispatch(register(user));
        event.currentTarget.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">    
                <TextField label="Username" margin="normal" type="text" name="name" />
                <TextField label="Email" margin="normal" type="email" name="email" />
                <TextField label="Password" margin="normal" type="password" name="password" />
            <Button variant="contained" type="submit">Register</Button>
        </Form>
    );
};