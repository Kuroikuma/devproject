import { Button } from "../components/button/button";
import "./page.css";

export const Page = () => {
  return (
    <div className="groupButton">
      <Button size="sm" color="primary">
        Primary
      </Button>
      <Button disabled disableShadow variant="text" size="md" color="secondary">
        Secondary
      </Button>
      <Button variant="outline" size="lg" color="default">
        default
      </Button>
      <Button startIcon="save" variant="outline" color="danger">
        danger
      </Button>
      <Button endIcon="buy" variant="text" color="primary">
        primary
      </Button>
    </div>
  );
};
