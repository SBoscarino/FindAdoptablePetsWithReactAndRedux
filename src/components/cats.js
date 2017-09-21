import React from 'react';


class CatComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      location : ' ',
      age : '',
      breed : ' ',
      gender : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log('handleChange', this.state)
  }
  handleSelectAge(event) {
    this.setState({age: event.target.value});
    console.log('handleChange', this.state)
  }
  handleSelectGender(event) {
    this.setState({gender: event.target.value});
    console.log('handleChange', this.state)
  }

  handleSubmit(event) {
    console.log("state in submit:", this.state)
    event.preventDefault();
  }


  render(){
  return (
    <div>
      <div>Find the Purrfect Cat For You!</div>
      <div>Fill out any fields that would be relevant to your search.</div>

        <form>
        <label>
          Location(zip code):
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={this.state.breed} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <select value={this.state.age} onChange={this.handleSelectAge}>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <label>
          Gender:
          <select value={this.state.gender} onChange={this.handleSelectGender}>
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <button onClick={this.handleSubmit}>Find Pets!</button>
      </form>
    </div>
  )
}
}

export default(CatComponent);
