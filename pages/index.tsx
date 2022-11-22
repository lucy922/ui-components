import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Link } from "../components/Link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-4">
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
      <Link href="/" color="blue" fontSize="lg">
        Link
      </Link>
    </div>
  );
};

export default Home;
