import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../features/sw/starWarsSlice';

export default function Input() {
  const info = useSelector(state => state.stars);
  const {value, factsArr} = info
  const dispatch = useDispatch();
  const changeHandle = (e) => {
    dispatch(addNumber(e.target.value))
  }

  return (
    <div>
      <label for='enterNumber' style={{marginRight: '5px'}}>enter a number from 1 to 5</label>
      <input type='number' id='enterNumber' value={value || ''} onChange={changeHandle}></input>
        <ul>
          {factsArr.slice(0, value).map((fact, id) => (
            <li key={id}>
              {fact}
            </li>
          ))}
        </ul>
    </div>
  )
}
