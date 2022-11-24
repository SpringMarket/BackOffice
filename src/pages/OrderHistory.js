import { reqeustOrderlist } from "../axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [res, setRes] = useState();
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
  console.log(res)

  useEffect(() => {
    updateUi();
  }, []);

  return <div>
    <div>
      주문 내역
    </div>

    <ul className="card_list">
  {res?.content.map((item, idx) => {
    return (
      <li key={idx} className="card">
        <p>title : {item.title}</p>
        <p>price : {item.price}</p>
        <p>orderNum : {item.orderNum}</p>
      </li>
    );
  })}
</ul></div>;
};

export default OrderHistory;
