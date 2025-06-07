import { Link } from 'react-router-dom';
import './style/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/fertilizer">Table View</Link></li>
        <li><Link to="/top-required">Top 5 Required</Link></li>
        <li><Link to="/least-available">Top 5 Least Available</Link></li>
        <li><Link to="/graphView">Graph View</Link></li>
      </ul>
    </nav>
  );
}
