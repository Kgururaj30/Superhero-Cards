import React, { Component } from 'react';
import { render } from 'react-dom';
import CarouselCard from './CarouselCard';
import Goodbye from './Goodbye';
import './style.css';
import { bindAll } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      superHeroData: {},
      activeId: 1,
      //carousel for 5 items inititally
      superHeroInitialIds: [1, 2, 3, 4, 5]
    };
    bindAll(this, ['nextImg', 'prevImg']);
  }

  componentDidMount() {
    //initially fetching data for id:1
    fetch('https://www.superheroapi.com/api.php/4301596443225455/1')
      .then(response => response.json())
      .then(res => {
        //console.log(res);
        this.setState(prevState => ({
          superHeroData: {
            ...prevState.superHeroData,
            [res.id]: res
          },
          activeId: 1
        }));
      });
  }

  componentDidUpdate() {
    if (!this.state.superHeroData[this.state.activeId]) {
      fetch(
        `https://www.superheroapi.com/api.php/4301596443225455/${
          this.state.activeId
        }`
      )
        .then(response => response.json())
        .then(res => {
          //console.log(res);
          this.setState(prevState => ({
            superHeroData: {
              ...prevState.superHeroData,
              [res.id]: res
            }
          }));
        });
    }
  }

  nextImg() {
    if (this.state.activeId >= this.state.superHeroInitialIds.length) {
      this.setState({ activeId: this.state.superHeroInitialIds[0] });
    } else {
      this.setState({ activeId: this.state.activeId + 1 });
    }
  }

  prevImg() {
    if (this.state.activeId === this.state.superHeroInitialIds[0]) {
      this.setState({
        activeId: this.state.superHeroInitialIds[
          this.state.superHeroInitialIds.length - 1
        ]
      });
    } else {
      this.setState({ activeId: this.state.activeId - 1 });
    }
  }

  render() {
    //console.log(this.state.superHeroData);

    return (
      <div style={{ display: 'flex', 'justify-content': 'center' }}>
        <div className="oval" onClick={this.prevImg}>
          Previous
        </div>
        {this.state.superHeroInitialIds.map((id, val) => {
          console.log(this.state.superHeroData[id]);
          return (
            <CarouselCard
              activeId={this.state.activeId}
              key={val}
              id={id}
              data={this.state.superHeroData[id]}
            />
          );
        })}
        <div className="oval" onClick={this.nextImg}>
          Next
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
