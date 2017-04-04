import React from 'react';
import ResponsiveFixedDataTable from 'responsive-fixed-data-table';
import { Column, Cell } from 'fixed-data-table';
import SortHeaderCell from './SortHeaderCell';

const Table = (props) => {

    const dataList = props.data;

    const dataKeys = props.headers;

    const TableCells = (props) => {
        let cellData = dataList[props.rowIndex][props.column];
        if(typeof(cellData) !== 'string') {
            cellData = cellData.toString();
        }
        return (
            <Cell>{ cellData }</Cell>
        )
    }

    const TableColumns = dataKeys.map((key, idx) => {
        if(!props.column.omit.includes(dataKeys[idx])) {
            return (
                <Column
                 key={ idx }
                 width={ 100 }
                 flexGrow={ 1 }
                 columnKey={ dataKeys[idx] }
                 header={<SortHeaderCell
                          table={ props.table }
                          title={ dataKeys[idx] }
                          sort={ props.sort }
                          sortDirs={ props.column[props.table] } />}
                 cell={<TableCells column={ dataKeys[idx] } />}/>
            )
        }
    });

    const tableWrapper = {
        height : 500,
    }

    return (
        <div style={ tableWrapper }>
            <ResponsiveFixedDataTable
             rowHeight={ 30 }
             rowsCount={ dataList.length }
             headerHeight={ 30 }
             { ...props }>
             { TableColumns }
            </ResponsiveFixedDataTable>
        </div>
    )
}

export default Table;
