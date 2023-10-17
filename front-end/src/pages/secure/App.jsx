import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./css/app.css";
export default function App(){
const navigate = useNavigate();
 

    return (
    <div>
      <div class="nav">
    <a id="home" className="active left" onClick={(e) => navigate("/app/profile")}>Home</a>
    <a onClick={(e) => navigate("/")}>Log out</a>
    <a onClick={(e) => navigate("/app/profile")}>Profile</a>
    <a onClick={(e) => navigate("/app/matches")}>Matches</a>
    <a onClick={(e) => navigate("/app/discover")}>Discover</a>
  </div>
  <Outlet />
  </div>
  )
}