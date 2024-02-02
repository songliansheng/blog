import styled from "styled-components";
import { FindallCustomer } from "./graphqlApi";
import { useQuery } from "@apollo/client";

export default function LoginForm() {
  const { loading, error, data } = useQuery(FindallCustomer);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const customers = data.allCustomers.data;

  function Input({ type, id, label, placeholder }) {
    return (
      <div className="form-floating">
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder="Password"
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  const SubmitButton = styled.button.attrs({
    className: "w-100 btn btn-lg btn-primary",
    type: "submit",
  })``;

  

  return (
    <form className="w-50">
      {/* {data} */}

      <h1 className="h3 mb-3 fw-normal">
        {customers.map((customer) => customer.firstName)}Please sign in
      </h1>
      
      <Input
        type="email"
        id="floatingEmail"
        label="Email address"
        placeholder="name@example.com"
      />
      <Input
        type="password"
        id="floatingPassword"
        label="Password"
        placeholder="Password"
      />

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <SubmitButton>Sign in</SubmitButton>
    </form>
  );
}
