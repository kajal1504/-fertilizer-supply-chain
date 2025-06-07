import { data } from "../../result"
import Navbar from "./Navbar";
import "./style/TopFiveLeast.css";

function TopFiveLeast() {
  const aggregated = {};

  data.forEach(item => {
    const value = parseFloat(item.availability_in_mt_ || 0);
    aggregated[item.product] = (aggregated[item.product] || 0) + value;
  });

  const topFive = Object.entries(aggregated)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 5);

  return (
    <>
    <div>
      <Navbar/>
      <div className="top-five-least">
      
      <h2>Top 5 Fertilizers by Least Availability</h2>
      <ul>
        {topFive.map(([product, total], index) => (
          <li key={index}>{product}: {total} MT</li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default TopFiveLeast;
