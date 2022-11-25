import { reqeustOrderlist, reqeustDelOrder } from "../axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const OrderHistory = () => {
  const [res, setRes] = useState();
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  const updateUi = useCallback(
    async (e) => {
      e?.preventDefault();

      try {
        const response = await reqeustOrderlist();
        setRes(response.data.check.data);
      } catch (error) {
        alert("주문 내역이 없습니다.");
        navigate("/");
      }
    }
  );

  const delOrder = 
  async (e) => {
    e?.preventDefault();
    
    try {
      await reqeustDelOrder(orderId);
    } catch (error) {
      alert("실패");
      console.log(error)
    }
  };

  

  useEffect(() => {
    updateUi();
  }, []);

  return <div>

<Link to={"/"}>Return</Link>
      <h2>
        주문 내역
      </h2>

    <ul className="card_list">
  {res?.content.map((item, idx) => {
    return (
      <li key={idx} className="card">
        <p>title : {item.title}</p>
        <p>price : {item.price}</p>
        <p>orderNum : {item.orderNum}</p>

        <div>
          <form onSubmit={delOrder} >
              <button>주문 취소</button>
          </form>
        </div>

      </li>
    );
  })}
</ul></div>;
};

export default OrderHistory;
