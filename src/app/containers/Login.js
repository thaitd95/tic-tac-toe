import styled from "styled-components";
import { useState } from "react";
import { defaultUser } from "../constants";

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  label {
    min-width: 150px;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "userName") {
      setUserName(e.target.value);
    }
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName === defaultUser.userName &&
      password === defaultUser.password
    ) {
      onLogin({ userName, password });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Item style={{ marginBottom: "5px !important" }}>
          <label>Username</label>
          <input id="userName" onChange={handleChange} />
        </Item>
        <Item>
          <label>Password</label>
          <input id="password" type="password" onChange={handleChange} />
        </Item>
        <input
          type="submit"
          value="Login"
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
      </form>
    </Container>
  );
};

export default Login;
