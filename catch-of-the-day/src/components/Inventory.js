import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this);
  }
  handleChange(e,key){
    const fish = this.props.fishes[key]
    const updatedFish = {...fish, [e.target.name]: e.target.value}
    // this will call the updateFish method in App to update the state
    this.props.updateFish(key,updatedFish)
  }
  renderInventory(key){
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
      <input type="text" value={fish.name} name="name" placeholder="Fish Name" onChange={(e) => this.handleChange(e,key)}/>
      <input type="text" value={fish.price} name="price" placeholder="Fish Price" onChange={(e) => this.handleChange(e,key)}/>
      <select type="text" value={fish.status} name="status" placeholder="Fish Status" onChange={(e) => this.handleChange(e,key)}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea type="text" value={fish.desc} name="desc" placeholder="Fish Description" onChange={(e) => this.handleChange(e,key)}>
      </textarea>
      <input type="text" value={fish.image} name="image" placeholder="Fish image" onChange={(e) => this.handleChange(e,key)}/>

      </div>
      )
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;














