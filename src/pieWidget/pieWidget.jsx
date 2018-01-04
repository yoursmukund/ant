import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import {PieChart, Pie, Legend} from 'recharts';
import './pieWidget.css';

class PieWidget extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div style={{ background: '#ECECEC', padding: '20px' }}>
          <Card bordered={false} style={{ width: '340px', height: '145px', textAlign: 'left', borderRadius: 10 }}>
            <div style={{fontWeight: 'bold', color: '#4c5e70', fontSize: 12, marginTop: 5}}>Cluster CPU Usage</div>
            <PieChart width={300} height={100} paddingTop={5}>
              <Pie data={this.props.data} cx={50} cy={50} innerRadius={32} outerRadius={40} fill="#82ca9d"/>
            </PieChart>
          </Card>
      </div>
    );
  }
}

export default PieWidget;
