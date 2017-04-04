import React from 'react';
import { Cell } from 'fixed-data-table';

const SortHeaderCell = (props) => {

   const { sortDirs, columnKey } = props;

    const SortTypes = {
        ASC  : 'ASC',
        DESC : 'DESC',
    };

    const reverseSortDirection = (sortDir) => {
        return sortDir[columnKey] === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
    }

    const columnSort = (e) => {
        e.preventDefault();
        props.sort(
            columnKey,
            sortDirs ? reverseSortDirection(sortDirs) : SortTypes.DESC,
            props.table,
        );
    }

    return (
        <Cell>
            <a onClick={ columnSort }>
                { props.title } { sortDirs ? (sortDirs[columnKey] ? (sortDirs[columnKey] === SortTypes.DESC ? '↓' : '↑') : '') : '' }
            </a>
        </Cell>
    );
}

export default SortHeaderCell;