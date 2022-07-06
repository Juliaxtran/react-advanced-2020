import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {

  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    };

    }
    if (action.type === 'NO_VALUE') {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter value'
      };
  }
  throw new Error ('no matching action type')
};

// from reducer you want to reduce some sort of state
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name};
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({type: 'NO_VALUE'});

    }
  }

  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text'
          value={name}
          onChange={(e) => setName(e.target.value)} />

      </div>
      <button className='btn' type='submit'>Submit</button>
    </form>
    {state.people.map(person => <h4 key={person.id}>{person.name}</h4>)}

  </>
};

export default Index;
