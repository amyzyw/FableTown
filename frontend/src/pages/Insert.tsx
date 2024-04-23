import React, { useState } from 'react';
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { City } from "../../../lib/types/index";

const Insert = () => {

    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { name, description, x, y });
    // Add your logic to submit the form data to a backend or perform other actions
  };

  // Handle input changes for name field
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  // Handle input changes for description field
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  // Handle input changes for x field
    const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setX(event.target.value);
    };
  // Handle input changes for y field
    const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setY(event.target.value);
    };
  
  
  return (
            <form onSubmit={handleSubmit}>
              <label>
                Name of the place:
                <input type="text" value={name}
                onChange={handleNameChange}
                required/>
              </label>
              <label>
                Description:
                <input type="textarea" value={description} 
                  onChange={handleDescriptionChange}
                />
              </label>
              <label>
                Location of the place:
                X:
                <input type="number" value={x} 
                onChange={handleXChange}/>
                Y:
                <input type="number" value={y}
                onChange={handleYChange}/>
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
}
export default Insert;