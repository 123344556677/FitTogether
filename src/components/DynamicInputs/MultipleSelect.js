import React from "react";
import Select from "react-select";

const MultiSelectWithTags = ({
  options,
  placeholder,
  selectedValues,
  handleSelect,
  name,
}) => {
  const handleChange = (selectedOptions) => {
    handleSelect(selectedOptions.map((option) => option.value), name);
  };

  return (
    <Select
      isMulti
      value={selectedValues.map((value) =>
        options.find((option) => option.value === value)
      )}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      isSearchable={false}
    />
  );
};

export default MultiSelectWithTags;
