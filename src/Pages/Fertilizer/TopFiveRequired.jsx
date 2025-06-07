import { data } from "../../result"
import Navbar from "./Navbar";
import "./style/TopFiveRequired.css";
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

function TopFiveRequired() {
  const aggregated = {};

  data.forEach(item => {
    const value = parseFloat(item.requirement_in_mt_ || 0);
    aggregated[item.product] = (aggregated[item.product] || 0) + value;
  });

  const topFive = Object.entries(aggregated)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <>
    <div>
      <Navbar/>
      <div className="top-five-required">
    
      
      <h2>Top 5 Fertilizers by Requirement</h2>
      <ul>
        {topFive.map(([product, total], index) => (
          <li key={index}>
            {product}: {total} MT</li>
        ))}
      </ul>
  
    </div>
    </div>
   
      
    
    
    </>
    
  );
}

export default TopFiveRequired;
