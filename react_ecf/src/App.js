import { Outlet } from "react-router-dom";
import Main from "./component/main";


function App() {
  return(
    <div className="container">
      <Main className='title'/>
      <Outlet/>
    </div>
  )
}

export default App;
