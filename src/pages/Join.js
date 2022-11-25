import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { requestSignup } from "../axios";

const INIT = {
  email: "",
  password: "",
  age: "",
};

const Join = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(INIT);

  const setValue = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const signUp = async (e) => {
    e.preventDefault();

    try {
      await requestSignup(userInfo);

      alert("회원가입에 성공하였습니다.");
      navigate("/");
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <div>

<Link to={"/"}>Return</Link>
      <h2>
        Sign Up
      </h2>

      <form onSubmit={signUp}>
        <div>
          <label>이메일</label>
          <input type={"email"} name={"email"} onChange={setValue} />
        </div>
        <div>
          <label>비밀번호</label>
          <input type={"password"} name={"password"} onChange={setValue} />
        </div>
        <div>
          <label>나이</label>
          <input name={"age"} onChange={setValue} />
        </div>
        <button>회원가입</button>
      </form>
      <button>
        <Link to={"/login"}>로그인</Link>
      </button>
    </div>
  );
};

export default Join;
