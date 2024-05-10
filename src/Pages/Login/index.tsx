import { Button, Divider, Text } from "@mantine/core";
import BackIcon from "../../Assets/IMG/Icons/BackIcon.svg";
import FacebookIcon from "../../Assets/IMG/Icons/FacebookIcon.svg";
import Logo from "../../Assets/IMG/Logo.svg";
import { ColorBlue, getColorOpacity } from "../../Lib/Data";

import "./styles.scss";

export default function Login() {
  return (
    <div className="login-container flex-col">
      <img src={BackIcon} className="back-icon" />
      <div className="main width-100 flex-col justify-between">
        <img src={Logo} className="logo" />
        <div className="inputs width-100 flex-col justify-between">
          <input className="input" placeholder="Username" />
          <input className="input" placeholder="Password" type="password" />
        </div>
        <div className="flex-row align-center justify-end">
          <Text c={ColorBlue} fw={500} fz="sm">
            Forgot Password?
          </Text>
        </div>
        <Button className="btn" color={ColorBlue}>
          Log In
        </Button>
        <div className="flex-row align-center justify-center width-100">
          <img className="facebook" src={FacebookIcon} />{" "}
          <Text ml={10} c={ColorBlue} fw={500} fz="sm">
            Forgot Password?
          </Text>
        </div>
        <div className="flex-row align-center justify-between width-100">
          <Divider color={getColorOpacity(0.15, "white")} w="36%" />
          <Text fw={500} c={getColorOpacity(0.6, "white")}>
            OR
          </Text>
          <Divider color={getColorOpacity(0.15, "white")} w="36%" />
        </div>
        <div className="flex-row align-center justify-center width-100">
          <Text fw={500} c={getColorOpacity(0.6, "white")}>
            Don't have an account?
          </Text>
          <Text ml={10} fw={500} c={ColorBlue}>
            Sign Up
          </Text>
        </div>
      </div>
      <div className="footer flex-col width-100">
        <Divider color={getColorOpacity(0.3, "white")} w="100%" />
        <Text fz="sm" c={getColorOpacity(0.6, "white")}>
          Instagram from Theajstars
        </Text>
        <Text></Text>
      </div>
    </div>
  );
}
