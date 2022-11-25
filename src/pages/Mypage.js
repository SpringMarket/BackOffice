import { reqeustMypage, reqeustDelCart } from "../axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Mypage = () => {
  const [res, setRes] = useState();
  const [productId, setProductId] = useState();
  const navigate = useNavigate();

  const updateUi = useCallback(
    async (e) => {
      e?.preventDefault();

      try {
        const response = await reqeustMypage();
        setRes(response.data.check.data);
      } catch (error) {
        alert("카트에 상품이 없습니다.");
        navigate("/");
      }
    }
  );

  const delCart = 
    async (e) => {
      e?.preventDefault();
      
      try {
        await reqeustDelCart(productId);
      } catch (error) {
        alert("실패");
      }
    };




  useEffect(() => {
    updateUi();
  }, []);



  return  <div>
    <Link to={"/"}>Return</Link>


    <h2>
      장바구니
    </h2>

    <ul className="card_list">
  {res?.map((item, idx) => {
    return (
      <li key={idx} className="card">
        <p>title : {item.title}</p>
        <p>price : {item.price}</p>
        <p>productId : {item.productId}</p>

        <Link to={"/detail"} state={item.productId}>상세페이지</Link>

        <div>
          <form onSubmit={delCart} >
              <button>장바구니에서 삭제</button>
          </form>
        </div>
        
      </li>
    );
  })}
</ul></div>;
};
  
  export default Mypage;
  