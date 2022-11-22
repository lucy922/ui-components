import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col mt-7 items-center">
      <Card bgColor="gray">
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Enter Email..."
          size="md"
          variant="filled"
        />
        <Button type="submit" size="sm" variant="primary">
          Button
        </Button>
        <div>ndfyuefguwh</div>
        <div>ndfyuefguwh</div>
        <div>ndfyuefguwh</div>
        <div>ndfyuefguwh</div>
        <div>ndfyuefguwh</div>
      </Card>
    </div>
  );
};

export default Home;
