import "./DashboardContent.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import {
  AiOutlineDollar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiHandbagBold } from "react-icons/pi";
import Card from "../Card/Card";

const DashboardContent = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const data = [
    {
      name: "Jan",
      earnings: 200,
    },
    {
      name: "Feb",
      earnings: 300,
    },
    {
      name: "Mar",
      earnings: 100,
    },
    {
      name: "Apr",
      earnings: 400,
    },
    {
      name: "May",
      earnings: 250,
    },
    {
      name: "Jun",
      earnings: 250,
    },
    {
      name: "Jul",
      earnings: 250,
    },
    {
      name: "Aug",
      earnings: 250,
    },
    {
      name: "Sep",
      earnings: 200,
    },
    {
      name: "Oct",
      earnings: 340,
    },
    {
      name: "Nov",
      earnings: 300,
    },
    {
      name: "Dec",
      earnings: 500,
    },
  ];
  const COLORS = ["#FFBB28", "#FF8042", "#AF19FF"];
  const pieChartData = [
    { name: "Customers", value: 30 },
    { name: "Subscribers", value: 25 },
    { name: "Guests", value: 45 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
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
        <div className="card">
          <Card
            icon={<AiOutlineDollar size={65} color="#00A645" />}
            color="#E4FFF0"
            title="Earning"
            amount="$198k"
            percentageChangeIcon={<AiOutlineArrowUp color="green" />}
            percentageChangeText="37.8% this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<BsReceiptCutoff size={50} color="#A817FF" />}
            color="#E7DBFF"
            title="Orders"
            amount="$2.4k"
            percentageChangeIcon={<AiOutlineArrowDown color="red" />}
            percentageChangeText="2% this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<MdAccountBalanceWallet size={50} color="#0759BF" />}
            color="#CEF4FF"
            title="Balance"
            amount="$2.4k"
            percentageChangeIcon={<AiOutlineArrowDown color="red" />}
            percentageChangeText="2% this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<PiHandbagBold size={50} color="#E02A3C" />}
            color="#FFB4DB"
            title="Total sales"
            amount="$98k"
            percentageChangeIcon={<AiOutlineArrowUp color="green" />}
            percentageChangeText="11% this week"
          />
        </div>
      </div>
      <div className="graph-card-container">
        <div className="bar-chart-container">
          <div className="bar-chart-header">
            <div className="bar-chart-details">
              <h4>Overview</h4>
              <p>Monthly Earning</p>
            </div>
            <div className="bar-chart-dropdown">
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="bar-chart">
            <BarChart width={700} height={300} data={data}>
              <Bar
                dataKey="earnings"
                fill="blue"
                radius={[5, 5, 5, 5]}
                baseValue={100}
              />
              <XAxis dataKey="name" />
              <Tooltip active />
            </BarChart>
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="pie-chart-details">
            <h4>Customers</h4>
            <p>Customer's that buy products</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                nameKey="name"
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={CustomTooltip} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
