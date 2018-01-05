import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import './areaWidget.css';

class AreaWidget extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '20px' }}>
        <Card bordered={false} style={{ width: '340px', height: '140px', textAlign: 'left', borderRadius: 10 }}>
          <div style={{fontWeight: 'bold', color: '#4c5e70', fontSize: 12, marginTop: 5}}>ljlkj</div>
          <div style={{fontWeight: 'SemiBold', color: '#7b8da0', fontSize: 12}}>{this.props.data[0].name}</div>
          <AreaChart width={300} height={90} data={this.props.data}
                margin={{top: 0, right: 15, left: 15, bottom: 0}}>
            <XAxis dataKey="name" interval={0} style={{fontFamily: 'Open Sans', fontSize: 9}} padding={{ left: 5, right: 5 }}/>
            <YAxis hide={true}/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
          </AreaChart>
        </Card>
      </div>
    );
  }
}

export default AreaWidget;
