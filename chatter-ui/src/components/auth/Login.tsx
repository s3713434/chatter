import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

export default function Login() {
  return (
    <Auth submitLable="Login" onSubmit={async () => {}}>
      <Link to={"/signup"} style={{ alignSelf: "center" }}>
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
}
