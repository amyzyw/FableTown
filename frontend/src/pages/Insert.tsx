import React, { useState } from 'react';

type Props<T> = {
  name?: string;
  description?: string
  x?: number
  y?: number
};

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

// interface Props {
//     initialValue?: string;
//   }
  
//   interface State {
//     value: string;
//   }
  

// class NameForm extends React.Component<Props, State> {
//     constructor(props: Props) {
//       super(props);
//       this.state = { value: '' };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name of the place:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Location of the place:
//             X:
//             <input type="number" value={this.state.value} onChange={this.handleChange} />
//             Y:
//             <input type="number" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Description:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
