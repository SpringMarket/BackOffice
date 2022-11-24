import { reqeustMypage, reqeustOrderCart } from "../axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [res, setRes] = useState();
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

  const orderList = 

  // const updateUi_2 = useCallback(
  //   async () => {
  //     try {
  //       reqeustOrderCart();
  //     } catch (error) {
  //       alert("주문에 실패하였습니다.");
  //     }
  //   }
  // );

  console.log(res)

  useEffect(() => {
    updateUi();
    // updateUi_2();
  }, []);



  return  <div>
    <div>
      장바구니
    </div>

    {/* <div>
    <form onSubmit={updateUi_2}>
    <button>갱신</button>
    </form>
    </div> */}

    <ul className="card_list">
  {res?.map((item, idx) => {
    return (
      <li key={idx} className="card">
        <p>title : {item.title}</p>
        <p>price : {item.price}</p>
        <p>productId : {item.productId}</p>
      </li>
    );
  })}
</ul></div>;
};
  
  export default Mypage;
  