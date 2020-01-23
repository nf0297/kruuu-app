import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllCategory } from '../Redux/_actions/ActionCategory';
import { connect } from 'react-redux';

const MenuItem = ({ text, selected }) => {
  return <div
      className={`menu-item ${selected ? 'active' : ''}`} style={{marginLeft:"10px", color:"black" }}
      >{text}</div>;
};

export const Menu = (list, selected) => list.map(el => {
    const { name, url } = el;

    return <Link to={`category/${el.id}/article`}><MenuItem text={name} key={name} url={url} selected={selected}/></Link>;
  });


const Arrow = ({ text, className }) => {
  return (
    <div

    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected
  };

  componentDidMount() {
    this.props.dispatch(getAllCategory());
  }
  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;

    return (
      <div style={{ marginBottom: "25px" }}>
        <ScrollMenu
          data={Menu(this.props.AllCategory, selected)}
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
  AllCategory: state.ReducerCategory.categories
})

export default connect(mapStatetoProps)(Category);

