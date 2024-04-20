import React, { useState } from 'react';

type Props<T> = {
  name?: string;
  description?: string
  x?: number
  y?: number
};

const Insert = <T extends { name: string, description: string, x: number, y: number}>({name, description, x, y}: Props<T>) => {
  if(useState("submit")) {
    const addInfo = () => {}
    // use memo
    // POST
  }
  
  return (
            <form>
              <label>
                Name of the place:
                <input type="text" value={name} />
              </label>
              <label>
                Description:
                <input type="text" value={description} />
              </label>
              <label>
                Location of the place:
                X:
                <input type="number" value={x} />
                Y:
                <input type="number" value={y} />
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
