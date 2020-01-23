import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Button, Image, Card} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllJob } from '../Redux/_action/ActionJob';
import { connect } from 'react-redux';


 
// One item component

// prop card
const MenuItem = ({text, selected, image}) => {
  return (
    <Card className={`menu-item ${selected ? 'active' : ''}`} style={{margin:'0vh 1vw', width:'8vw', height:'25vh'}}>
      <Image src={image} style={{width:'8vw', height:'25vh'}}/>
    </Card>
  ) 
}
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name, image} = el;
 
    return <MenuItem text={name} key={name} image={image} selected={selected} />;
  });
 
const ArrowLeft = <Button circular icon='left arrow' color='green'/>
const ArrowRight = <Button circular icon='right arrow' color='green'/>
 
const selected = 'item1';
 
class Jobs extends Component {
  constructor(props) {
    super(props);
    // // call it again if items count changes
    // this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
  
  componentDidMount() {
    this.props.dispatch(getAllJob());
  }

  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // // Create menu from items
    // const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={Menu(this.props.AllJobs, selected)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

// state
const mapStatetoProps = state => ({
  AllJobs: state.ReducerJob.job
})

export default connect(mapStatetoProps)(Jobs);


const style = {
  card: {
      textAlign:'center',
      backgroundColor:'rgba(0,0,0,0.5)',
      opacity:'0.9',
      marginTop:'-25%',
  },
  cardText: {
      color:'#fff'
  },
  group: {
      padding:'3vh 0vw'
  },
  buttonRight: {
    marginRight:'-5vw'
  },
  buttonLeft: {
    marginLeft:'-5vw'
  }

}