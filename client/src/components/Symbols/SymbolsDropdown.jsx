import Select from 'react-select';

import useSymbols from '../../hooks/useSymbols';
import { useEffect } from 'react';

const SymbolsDropdown = ({ onChange }) => {
  const { data: symbols } = useSymbols();

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      onChange={onChange}
      options={symbols}
      name="color"
      isSearchable="true"
    />
  );
};

export default SymbolsDropdown;
