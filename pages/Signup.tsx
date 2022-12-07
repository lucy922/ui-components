import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

function Signup() {
  return (
    <div className="flex flex-col mt-28 items-center">
      <Card bgColor="white" size="11/12">
        <h1 className="text-center font-medium text-lg">Sign Up</h1>
        <Label>First Name</Label>
        <Input
          type="text"
          name="FirstName"
          placeholder="Enter First name..."
          size="md"
          variant="primary"
        />
        <Label>Last Name</Label>
        <Input
          type="text"
          name="LastName"
          placeholder="Enter Last name..."
          size="md"
          variant="primary"
        />
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
          Sign in
        </Button>
      </Card>
    </div>
  );
}

export default Signup;
