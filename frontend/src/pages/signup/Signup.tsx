import { useState } from "react";
import login_screen from "./../../assets/login-screen-img.png";
import { isMobile, BrowserView } from "react-device-detect";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    mobile: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSignUp = async () => {
    await axios
      .post("http://localhost:3001/user", data)
      .then((response) => {
        console.log(response);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <LeftSide>
        <Logo />

        <FormLabel text="Enter your name" />
        <Input
          type="text"
          description="nome@example.com"
          name="name"
          onChange={handleInput}
        />

        <FormLabel text="Enter your email address" />
        <Input
          type="email"
          description="nome@example.com"
          name="email"
          onChange={handleInput}
        />

        <FormLabel text="Enter your mobile number" />
        <Input
          type="text"
          description="(35) 0000-0000"
          name="mobile"
          onChange={handleInput}
        />

        <FormLabel text="Enter your phone number" />
        <Input
          type="text"
          description="(35) 0000-0000"
          name="phone"
          onChange={handleInput}
        />
        <FormLabel text="Enter your password" />
        <Input
          type="password"
          description="at least 8 characters"
          name="password"
          onChange={handleInput}
        />
        <ButtonSignUp onClick={handleSignUp} />
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

const ButtonSignUp = ({ onClick }: { onClick: () => void }) => {
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
      Sign Up
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

const Signup = () => {
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

export default SignUp;
