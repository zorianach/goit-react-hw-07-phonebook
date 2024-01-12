import { useState } from "react";
import {Form, Label, Input, Button} from "./AddContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import { paramsForNotify } from "components/paramsForNotify";
import { nanoid } from "@reduxjs/toolkit";
import { addContactThunk } from "../../redux/contactsSlice/thunks";
import { selectAllContacts } from "../../redux/selectors";

const AddContactForm = ()=> {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const {contacts} = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  // console.log('contacts', contacts)
  const handleChange = (e) =>  {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const normalizedName = name.toLowerCase();

   const isAdded = contacts.find(el => el.name.toLowerCase() === normalizedName) 

   if (isAdded) {
    Notify.failure(`${name}: is already in contacts`, paramsForNotify)
    setName('')
    setNumber('')
    return;
  }
    dispatch(addContactThunk({ id: nanoid(), name, number }))
    Notify.success(`Contact ${name} has been added to your Contacts`, paramsForNotify)
    resetForm();
  }

  const resetForm = () => {
    setName('')
    setNumber('')
    };
  
    return (
      <>
      <Form onSubmit={handleSubmit} >
      <Label htmlFor='exampleInputEmail1' className='form-label'>
        Name
      </Label>
      <Input
        name='name'
        type='text'
        className='form-control'
        id='exampleInputEmail1'
        aria-describedby='emailHelp'
        value={name}
        onChange={handleChange}
        required
      />
      <Label htmlFor='exampleInputEmail1' className='form-label'>
        Number
      </Label>
      <Input 
      type="tel" 
      name="number" 
      value={number}
      onChange={handleChange}
      required
      />
    <Button type='submit' className='btn btn-primary'>
      Add contact
    </Button>
  </Form>
  </>
    )
  };  


export default AddContactForm;