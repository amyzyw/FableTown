import React, { useEffect, useState } from 'react';
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { City } from "../../../lib/types/index";
import { useNavigate } from "react-router-dom"; 


const Insert = () => {

    // Define state variables for form inputs
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { name, description, x, y });
    // const submitted = { name, description, x, y }
    // Add your logic to submit the form data to a backend or perform other actions
    fetch(`${BACKEND_BASE_PATH}addCity/`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({name: name,
                            description: description,
                            x: x,
                            y:y
      }),
    },).then((res) => res.json()).then((data) => {
        console.log("RECEIVED CITIES: ", data);
        return data
    }).catch(() => {
        alert("Uh oh!")
    })

  //   if (user) {
  //     handleLoginRedirect(); // Redirect user after successful form submission
  //   } else {
  //     // Handle non-logged-in user scenario (e.g., show error message)
  //   }
  // };
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
  
  //   useEffect(() => {
  //     console.log("here")
  //     fetch(`${BACKEND_BASE_PATH}addCity/`,{
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({name: name,
  //                             description: description,
  //                             x: x,
  //                             y:y
  //       }),
  //     },).then((res) => res.json()).then((data) => {
  //         console.log("RECEIVED CITIES: ", data);
  //         return data.city
  //     }).catch(() => {
  //         alert("Uh oh!")
  //     })
  // }, []);

  return (
            <div id='insert-form'>
            <form onSubmit={handleSubmit} id='center-container'>
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
                X Coordinate:
                <input type="number" value={x} 
                onChange={handleXChange}/>
                Y Coordinate:
                <input type="number" value={y}
                onChange={handleYChange}/>
              </label>
              <input type="submit" value="Submit" id='input'/>
            </form>
            </div>
          );
}
export default Insert;