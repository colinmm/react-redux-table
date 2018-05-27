import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

const ColumnSelect = (props) => {

   const menuData = props.data.map((key, idx) => {
      return { value : key, selected : !props.omit.includes(key) };
   });

   return (
      <Multiselect data={ menuData } onChange={ props.toggle } multiple />
   )
}

export default ColumnSelect;