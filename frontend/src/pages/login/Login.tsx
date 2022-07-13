import { useState, useEffect } from "react";
import login_screen from "./../../assets/login-screen-img.png";
import { isMobile, BrowserView } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = () => {
    console.log("Fazer Login");
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftSide>
        <Logo />
        <Title />
        <Subtitle />
        <FormLabel text="Enter your email address" />
        <Input
          type="email"
          description="nome@example.com"
          name="email"
          onChange={handleInput}
        />
        <FormLabel text="Enter your password" />
        <Input
          type="password"
          description="at least 8 characters"
          name="password"
          onChange={handleInput}
        />
        <ButtonLogin onClick={handleLogin} />
        <CheckBox />
        <ForgetPassword />
        <Signup onClick={() => navigate('/registration')} />
      </LeftSide>
      <BrowserView>
        <RightSide>
          <img
            src={login_screen}
            alt="logo"
            style={{ height: "100vh", width: "100%" }}
          />
        </RightSide>
      </BrowserView>
    </div>
  );
};

const LeftSide = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: isMobile ? "100vw" : "30vw",
        display: "flex",
        flexDirection: "column",
        padding: "60px",
      }}
    >
      {children}
    </div>
  );
};

const RightSide = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "70vw", background: "#FAF6FD" }}>{children}</div>;
};

const Logo = () => {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "40px" }}>
      Discovery Gift
    </div>
  );
};

const Title = () => {
  return (
    <div style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px" }}>
      Log in.
    </div>
  );
};

const Subtitle = () => {
  return (
    <div style={{ fontSize: "14px", marginBottom: "20px", color: "#8c8f91" }}>
      Log in with your data that you entered <br /> during your registration
    </div>
  );
};

const FormLabel = ({ text }: { text: string }) => {
  return <div style={{ marginBottom: "8px" }}>{text}</div>;
};

const Input = ({
  description,
  name,
  onChange,
  type,
}: {
  description: string;
  name: string;
  type: string;
  onChange: (e: any) => void;
}) => {
  return (
    <input
      placeholder={description}
      name={name}
      type={type}
      onChange={onChange}
      style={{
        color: "#8c8f91",
        padding: "12px",
        border: "1px solid #8c8f91",
        borderRadius: "4px",
        marginBottom: "20px",
      }}
    />
  );
};

const ButtonLogin = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px",
        background: "#6B2CD8",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
        marginBottom: "40px",
      }}
    >
      Log in
    </button>
  );
};

const CheckBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input type="checkbox" />
      <div>Use password for loggin into my account</div>
    </div>
  );
};

const ForgetPassword = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        color: "#6B2CD8",
        fontWeight: "bold",
      }}
    >
      Forget password?
    </div>
  );
};

const Signup = ({ onClick }: { onClick: () => void }) => {
  return (
    <div>
      <hr style={{ margin: "20px 0" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={onClick}
          style={{
            color: "#6B2CD8",
            padding: "10px 40px",
            border: "1px solid#6B2CD8",
            borderRadius: "20px",
            fontWeight: "bold",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Login;
