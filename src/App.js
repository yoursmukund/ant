import React, { Component } from 'react';
import PieWidget from './pieWidget/pieWidget.jsx';
import AreaWidget from './areaWidget/areaWidget.jsx';


class App extends Component {
  render() {
    const data = [
      {name: '12:45 PM', uv: 4000, pv: 2400, amt: 2400},
      {name: '12:45 PM', uv: 3000, pv: 1398, amt: 2210},
      {name: '12:45 PM', uv: 2000, pv: 9800, amt: 2290},
      {name: '12:45 PM', uv: 2780, pv: 3908, amt: 2000},
      {name: '12:45 PM', uv: 1890, pv: 4800, amt: 2181},
      {name: '12:45 PM', uv: 2390, pv: 3800, amt: 2500},
      {name: '12:45 PM', uv: 3490, pv: 4300, amt: 2100}
    ];
    const data01 = [
      {name: 'Group A', value: 2400}, 
      {name: 'Group B', value: 4567},
      {name: 'Group C', value: 1398}, 
      {name: 'Group D', value: 9800},
      {name: 'Group E', value: 3908}, 
      {name: 'Group F', value: 4800}
    ];

    return (
      <div>
        <AreaWidget data = {data} />
        <PieWidget data = {data01}/>
      </div>
    );
  }
}

export default App;
