import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <span className="header__logo" onClick={() => navigate("/")}>
        JSONPlaceHolder/users
      </span>
    </header>
  );
}

export default Header;
