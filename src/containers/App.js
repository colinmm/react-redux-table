import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as data from '../actions/data';
import * as search from '../actions/search';
import * as column from '../actions/column';
import Table from '../components/Table';
import ColumnSelect from '../components/ColumnSelect';

const table = 'data';

class TableContainer extends React.Component {

    componentDidMount() {
        this.props.requestData();
    }

    render() {

        const { props } = this;

        if(props.isFetching) {
            return (
                <div>Loading...</div>
           )
        } else {
            return (
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <ColumnSelect 
                         data={ props.headers } 
                         omit={ props.column.omit } 
                         toggle={ props.toggleColumn } />
                        <input type='text' onChange={ props.search }/>
                        <Table
                         table={ table }
                         headers={ props.headers }
                         data={ props.data }
                         column={ props.column }
                         sort={ props.sort } />
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {

    const { data, search, column } = state;

    // Column sort
    const sortedData = (data) => {
        if(column[table]) {
            const sortKey = Object.keys(column[table]).toString();
            const sortDir = Object.values(column[table]).toString().toLowerCase();
            return _.orderBy(data, [sortKey.toString()],[sortDir.toString().toLowerCase()]);
        } else {
            return data;
        }
    }
    
    // Search filter
    const searchKey = search[table];
    const omittedKeys = column.omit;

    const filteredData = (data) => {
        data = sortedData(data);
        if(searchKey) {
            let searchFilteredList = [];
            for(var index = 0; index < data.length; index++) {
                if(Object.values(_.omit(data[index], omittedKeys)) // Omit hidden columns
                    .toString()
                    .toLowerCase()
                    .indexOf(searchKey) !== -1) {
                        searchFilteredList.push(data[index]);
                }
            }
            return searchFilteredList;
        } else {
            return data;
        }
    }
    
    return {
        state,
        isFetching : data.isFetching,
        data       : filteredData(data.data),
        headers    : data.headers,
        column,
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    requestData  : () => dispatch(data.requestData()),
    search       : (e) => dispatch(search.search(e.target.value.toLowerCase(),table)),
    sort         : (key,direction,table) => dispatch(column.sortColumn(key,direction,table)),
    toggleColumn : (e) => dispatch(column.toggleColumn(e[0].value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TableContainer);