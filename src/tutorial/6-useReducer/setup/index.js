import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
  }
}

const defaultState = {
  people:[],
  isModalOpen: false,
  modalContent: 'hello world',
}
const Index = () => {
const [state, dispatch] = useReducer(reducer, defaultState);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
   e.preventDefault();
   if(name) {

   }else {

   }
  }

  return <>
    {state.isModalOpen && <Modal />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text'
          value={name}
          onChange ={(e) => setName(e.target.value)}/>

      </div>
      <button  className = 'btn' type='submit'>Submit</button>
    </form>
  {state.people.map(person => <h4 key={person.id}>{person.name}</h4>)}

  </>
};

export default Index;
