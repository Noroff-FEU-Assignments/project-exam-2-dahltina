import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export default function Searchbar() {

  const data = useContext(DataContext);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleOnSelect = (item) => {
    setFilteredResults([]);
    setSearchInput("");
  }

  const searchItems = (value) => {
    setSearchInput(value);
    const filteredData = data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredResults(filteredData);
    console.log(filteredData);
  }

  return (
    <div className="search-container">
      <Form.Group className="d-flex" id="search-form">
        <Form.Control
          data={data}
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={(event) => searchItems(event.target.value)}
        />
        </Form.Group>

      <div className="search-results">
        {filteredResults.map((item) => {
          return (
            <ListGroup>
              <Link to={`accommodation/${item.id}`} >
                <ListGroup.Item onClick={handleOnSelect}>
                  {item.title.rendered}
                </ListGroup.Item>
              </Link>
            </ListGroup>
          )
        })}
      </div>
    </div>
  )
}
