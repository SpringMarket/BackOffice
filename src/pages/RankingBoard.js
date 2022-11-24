import { Link } from "react-router-dom";
import "./ranking.css";
import { useCallback, useEffect, useState } from "react";
import { reqeustRankingBoard1, reqeustRankingBoard2, reqeustDashboard,
  reqeustRankingBoard3, reqeustRankingBoard4, reqeustRankingBoard5 } from "../axios";

const Main = () => {
  const [res, setRes] = useState(null);
  const [filter, setFilter] = useState();


  const rank1 = useCallback(
    async (e) => {
      e?.preventDefault();
      const response = await reqeustRankingBoard1();
      console.log(response)
      setRes(response.data.check.data);
    }
  );

  const rank2 = useCallback(
    async (e) => {
      e?.preventDefault();
    const response = await reqeustRankingBoard2();
    return setRes(response.data.check.data);
    }
  )

  const rank3 = useCallback(
    async (e) => {
      e?.preventDefault();
    const response = await reqeustRankingBoard3();
    return setRes(response.data.check.data);
    }
  )

  const rank4 = useCallback(
    async (e) => {
      e?.preventDefault();
    const response = await reqeustRankingBoard4();
    return setRes(response.data.check.data);
    }
  )

  const rank5 = useCallback(
    async (e) => {
      e?.preventDefault();
    const response = await reqeustRankingBoard5();
    return setRes(response.data.check.data);
    }
  )

  const updateUi = useCallback(
    async (e) => {
      e?.preventDefault();

      const response = await reqeustDashboard(filter);

      setRes(response.data.check.data.content);
    },
    [filter]
  )

  useEffect(() => {
    rank1();
    rank2();
    rank3();
    rank4();
    rank5();
    updateUi();
  }, []);

  console.log(res)
  console.log(filter)

  return (
    <div className="mainContainer">

    <div className="filterContainer">
      <h2 className="logo">
        Spring Market Ranking Board
      </h2>

      <div className="rankingButton">
      <div>
      <form onSubmit={rank1}>
      <button>재킷</button>
      </form>
      </div>

      <div>
      <form onSubmit={rank2}>
      <button>상의</button>
      </form>
      </div>

      <div>
      <form onSubmit={rank3}>
      <button>하의</button>
      </form>
      </div>

      <div>
      <form onSubmit={rank4}>
      <button>신발</button>
      </form>
      </div>

      <div>
      <form onSubmit={rank5}>
      <button>원피스</button>
      </form>
      </div>
      </div>

      {/* 필터링 조회 */}

      <form onSubmit={updateUi}>

      <div>
        카테고리 : 
        <select
          onChange={(e) => {
            const { value } = e.target;

            setFilter({ ...filter, category: value });
          }}
        >
          <option value={"아우터"}>아우터</option>
          <option value={"상의"}>상의</option>
          <option value={"하의"}>하의</option>
          <option value={"신발"}>신발</option>
          <option value={"원피스"}>원피스</option>
        </select>
      </div>

        <select
          onChange={(e) => {
            const { value } = e.target;

            setFilter({ ...filter, stock: value });
          }}
        >
          <option value={1}>품절상품 포함</option>
          <option value={0}>품절상품 미포함</option>
        </select>

        <div>
          최소 금액 :
        <input
          onChange={(e) => {
            const { value } = e.target;
            setFilter({ ...filter, minPrice: Number(value) });
          }}
        />
        </div>

        <div>
          최대 금액 :
        <input
          onChange={(e) => {
            const { value } = e.target;
            setFilter({ ...filter, maxPrice: Number(value) });
            
          }}
        />
        </div>
      
        <div>
          키워드 :
        <input
          onChange={(e) => {
            const { value } = e.target;
            setFilter({ ...filter, keyword: value });
          }}
        />
        </div>

      <div>
        정렬 :
        <select
          onChange={(e) => {
            const { value } = e.target;

            setFilter({ ...filter, sorting: value });
          }}
        >
          <option value={"조회순"}>조회순</option>
          <option value={"날짜순"}>날짜순</option>
          <option value={"10대"}>10대</option>
          <option value={"20대"}>20대</option>
          <option value={"30대"}>30대</option>
          <option value={"40대 이상"}>40대 이상</option>
        </select>
      </div>

        <button>갱신</button>
      </form>

      {/* 필터링 조회 */}



    
      </div>
      <ul className="card_list">
        {res?.map((item, idx) => {
          return (
            <li key={idx} className="card">
              <p>title : {item.title}</p>
              <p>price : {item.price}</p>
              <p>productId : {item.productId}</p>
              <Link to={"/detail"} state={item.productId}>상세페이지</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
