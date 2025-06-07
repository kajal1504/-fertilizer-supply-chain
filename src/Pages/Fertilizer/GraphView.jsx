import { data } from "../../result"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import "./style/GraphView.css"; 
import Navbar from "./Navbar";

function GraphView() {
  const graphData = data
    .filter(item => item.product === 'DAP') //  dynamic filter
    .map(item => ({
      month: item.month,
      requirement: parseFloat(item.requirement_in_mt_),
      availability: parseFloat(item.availability_in_mt_),
    }));

  return (
    <>
    <div>
        <Navbar/>
        <div className="graph-view-container">
      <h2>DAP Availability vs Requirement</h2>
      <LineChart width={700} height={300} data={graphData}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="requirement" stroke="#ff7300" />
        <Line type="monotone" dataKey="availability" stroke="#387908" />
      </LineChart>
    </div>
    </div>
    </>
    
  );
}

export default GraphView;
