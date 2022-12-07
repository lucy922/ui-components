import { Label } from "../components/Label";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

function Login() {
  return (
    <div className="flex flex-col mt-28 items-center">
      <Card bgColor="white" size="11/12">
        <h1 className="text-center font-medium text-xl mb-4">Login</h1>
        <Label>Email</Label>
        <Input
          type="text"
          name="Email"
          placeholder="Enter Email..."
          size="md"
          variant="primary"
        />
        <Label>Password</Label>
        <Input
          type="text"
          name="Password"
          placeholder="Enter Password..."
          size="md"
          variant="primary"
        />
        <Button type="submit" size="xl" variant="primary">
          Login
        </Button>
      </Card>
    </div>
  );
}

export default Login;
