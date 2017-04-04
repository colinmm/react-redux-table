import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

const ColumnSelect = (props) => {

   const menuData = [];

   props.data.map((key, idx) => {
      menuData.push({ value : key, selected : !props.omit.includes(key) });
   });

   return (
      <div>
        <Multiselect data={ menuData } onChange={ props.toggle } multiple/>
      </div>
   )
}

export default ColumnSelect;