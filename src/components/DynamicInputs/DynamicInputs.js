import React from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";
import "../Auth/Auth.css";

const DynamicInput = ({ data, value, handleChange }) => {
  return (
    <FormGroup>
      {data.type === "select" ? (
        <>
          {data?.label && <Label for={data.name}>{data.label}</Label>}
          <Input
            type="select"
            name={data.name}
            id={data.name}
            value={value}
            onChange={handleChange}
            required={data.required}
            className={`${data?.className} input-select`}
          >
            {data.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.title}
              </option>
            ))}
          </Input>
        </>
      ) : (
        <InputGroup className={`${data?.className} input-group-alternative mb-3`}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={data.icon} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder={data.placeholder}
            type={data.type}
            name={data.name}
            value={value}
            onChange={handleChange}
            required={data.required}
          />
        </InputGroup>
      )}
    </FormGroup>
  );
};

export default DynamicInput;
