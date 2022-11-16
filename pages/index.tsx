import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-4">
      <Input
        type="text"
        placeholder="Enter text..."
        size="md"
        variant="filled"
      />
      <Button type="submit" size="sm" variant="primary">
        Button
      </Button>
    </div>
  );
};

export default Home;
