// Styling

import { Logo, ThemeButton, NavProduct } from "../styles";

const NavBar = (props) => {
  const logoTheme = () =>
    props.currentTheme === "light"
      ? "https://cdn.discordapp.com/attachments/797449550616068106/804257167925706762/light-logo.png"
      : "https://cdn.discordapp.com/attachments/797449550616068106/804257171373162526/dark-logo.png";
  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">
        <Logo exact to="/">
          <img src={logoTheme()} alt=" "></img>
        </Logo>
      </h4>
      <div className="navbar-nav ml-auto">
        <NavProduct
          to="/"
          exact
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Home
        </NavProduct>

        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
