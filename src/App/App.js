import React from 'react';
import './App.scss';


import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
        <h1>GOAT YOGA LTD.</h1>
        <GoatCoral goats={this.state.goats} useAGoat={this.useAGoat}/>
      </div>
    );
  }
}

export default App;
