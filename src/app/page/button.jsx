import { Button } from "../components/button/button";
import { SideBar } from "../components/side-bar/side-bar";
import "./page.css";

export const ButtonPage = () => {
  return (
    <SideBar>
      <div className="groupButton">
        <Button>Primary</Button>
        <button disabled>´primary</button>
      </div>
    </SideBar>
  );
};
