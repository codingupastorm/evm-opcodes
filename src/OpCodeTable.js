import React, { Component } from 'react';
import {opCodes} from './OpCodes.json';

class OpCodeTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchInput: ''
    };
  }

  search(){

  }

  render() {
    return (
      <table className="mui-table mui-table--bordered">
        <thead>
          <tr>
            <th>
              Value
            </th>
            <th>
              Name
            </th>
            <th>
              Pops from stack
            </th>
            <th>
              Adds to stack
            </th>
            <th>
              Gas cost
            </th>
            <th>
              Description / How to use
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.opCodes.map((opCode, index) =>
            <tr key={index}>
              <td>
                {opCode.value}
              </td>
              <td>
                {opCode.name}
              </td>
              <td>
                {opCode.popsFromStack}
              </td>
              <td>
                {opCode.addsToStack}
              </td>
              <td>
                {opCode.gasCost}
              </td>
              <td>
                <em>{opCode.yellowPaperDescription}</em>
                <br />
                {opCode.customDescription}
              </td>
            </tr>)}
        </tbody>
      </table>
    );
  }
}

export default OpCodeTable;
