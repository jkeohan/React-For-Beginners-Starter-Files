import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // first way 
  // constructor() {
  //   super() //runs react component first
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // second way
  // onSubmit={this.goToStore.bind(this)}
  // third way
  // onSubmit=(e) => this.goToStore(e)
  goToStore(event) {
    event.preventDefault()
    // first grab text from box
    const storeId = this.storeInput.value;
    // transition to page
    this.context.router.transitionTo(`/store/:${storeId}`)
  }
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
         { /* This is just a comment...can't put them above parent */ }
        <input type="text" required="" placeholder="Store Name" 
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;








