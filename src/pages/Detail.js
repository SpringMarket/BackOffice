import { useLocation } from "react-router-dom";
import { reqeustDetail, reqeustAddCart, reqeustOrder } from "../axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const INIT = {
  productId: "",
  orderNum: ""
};


  const Detail = () => {
    const location = useLocation()
    const [res, setRes] = useState({})
    const [orderRequestDto, setOrderRequestDto] = useState(INIT)

    const setValue = (e) => {
      const { name, value } = e.target;
      setOrderRequestDto({ ...orderRequestDto, [name]: value });
    };

    const detail = async ()=>{
    const response = await reqeustDetail(location.state)
    return setRes(response)
    }

  const addCart = async (e) => {
      e?.preventDefault();
      console.log(info?.productId)
      try {
        await reqeustAddCart(info?.productId);
        alert("장바구니 추가 완료");
      } catch (error) {
        alert("장바구니 추가 실패");
      }
    }



  const order = async (e) => {
    e?.preventDefault();
    console.log(orderRequestDto)
    try {
      const response = await reqeustOrder(orderRequestDto);
      alert("주문 완료");
    } catch (error) {
      alert("주문 실패");
      console.log(error)
    }
  }




  useEffect(()=>{
  detail()
  },[])
  
  const info = res.data?.check.data
  
  return (<div>

    <Link to={"/"}>Return</Link>

    <h2>
      Detail
    </h2>

    <div>
      <img src={info?.photo}></img>
    </div>
    <div>
      title : {info?.title}
    </div>
    <div>
      content : {info?.content}
    </div>
    <div>
      price : {info?.price}
    </div>

    <div>
    <form onSubmit={addCart}>
        <button>장바구니 추가</button>
      </form>
    </div>

    <div>
    <form onSubmit={order}>
          <div>
            <label>주문 수량</label>
            <input onChange={(e) => {
                const { value } = e.target;
                setOrderRequestDto({ ...orderRequestDto, productId: info?.productId, orderNum: Number(value)});
          }} />
          </div>
        <button>주문하기</button>
      </form>
    </div>

  </div>)
  };

export default Detail;
