// Write your code here
import {Component} from 'react'

import DestinationItem from './components/DestinationItem'
// import DestinationItem from './components/DestinationItem/index'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {inputString: ''}
    this.props = props
  }

  //   console.log(destinationsList)
  keyPressed = event => {
    this.setState({inputString: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {inputString} = this.state
    const outList = destinationsList.filter(eachItem =>
      eachItem.name.includes(inputString),
    )
    console.log(outList)
    return (
      <div className="mainContainer">
        <h1>Destination Search</h1>
        <input onChange={this.keyPressed} type="search" />
        <div className="subContainer">
          <ul>
            {outList.map(eachIndex => {
              const {id, name, imgUrl} = eachIndex
              return (
                <li>
                  <img alt="search icon" className="image" src={imgUrl} />
                  <p>{name}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
