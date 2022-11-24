import { useLocation } from "react-router-dom";
import { reqeustDetail } from "../axios";
import { useEffect, useState } from "react";


const Detail = () => {
  const location = useLocation()
  const [res, setRes] = useState({})

  const detail = async ()=>{

  const response = await reqeustDetail(location.state)
  
  return setRes(response)
  }

  console.log(res)

  useEffect(()=>{
  detail()
  },[])
  
  const info = res.data?.check.data
  
  return (<div>
  title : {info?.title}
  </div>)
  };

export default Detail;
