import React, { useState } from 'react';
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { useNavigate } from "react-router-dom"; 


const Insert = () => {

    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [type, setType] = useState('');
    const [size, setSize] = useState<number>(0);
    const [color, setColor] = useState('');
    const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${BACKEND_BASE_PATH}/addCity/`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({name: name,
                            description: description,
                            x: x,
                            y:y,
                            type: type,
                            size: size,
                            color: color
      }),
    },).then((res) => res.json()).then((data) => {
        return data
    }).catch(() => {
        alert("Uh oh!")
    })
    navigate("/");
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
      setX(Number(event.target.value));
    };
  // Handle input changes for y field
    const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setY(Number(event.target.value));
    };
  // Handle input changes for type field
  const handleTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setType(event.target.value)
};
// Handle input changes for size field
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(event.target.value));
  };

  // Handle input changes for color field
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };


  return (
    <div>
      <p className='p-norm'>🏙️ Create your own city from scratch, customizing every detail to suit your vision and strategy! 🏙️</p>
            <div className='insert-form'>
            <form onSubmit={handleSubmit} className='center-container'>
              <label>
                Name of the city:
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
                X Coordinate:
                <input type="number" value={x} 
                onChange={handleXChange}/>
                Y Coordinate:
                <input type="number" value={y}
                onChange={handleYChange}/>
              </label>
              <label htmlFor="select">Town Type:
                  <select name="select" id="select" onChange={handleTypeChange} required>
                    <option value="">Select</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Military">Military</option>
                    <option value="Industrial">Industrial</option>
                  </select>
              </label>
              <label>
                Size:
                <input type="number" value={size} 
                onChange={handleSizeChange}/>
              </label>
              <label>
                Color:
                <input type="color" value={color} 
                onChange={handleColorChange}/>
              </label>

              <input type="submit" value="Submit" id='input'/>
            </form>
            </div>
    </div>
          );
}
export default Insert;