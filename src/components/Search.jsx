import React from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";

const Search = ({value, onChange}) => {
  function handleChange(event){
    onChange(event.target.value);
  }
  
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={value}
        onChange={handleChange}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default Search;
