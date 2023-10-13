import "./DashboardContent.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const DashboardContent = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <div className="main-container">
      <div className="header">
        <p>Hello Harshit 👋,</p>
        <div className="input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            name="search"
            value={searchInput}
          />
        </div>
      </div>
      <div className="cards-container">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>

      </div>
    </div>
  );
};

export default DashboardContent;
