
import {Link,React} from "react";
import "./App.css"

function Header({ page }) {
  return (
    <div className="header">
      <h2>{page}</h2>
      <p>Welcome to My PetCare Activity 🐶</p>
    </div>
  );
}

export default Header;
