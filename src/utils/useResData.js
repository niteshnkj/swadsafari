import { useEffect, useState } from "react";
import { resMenuAPI } from "./constants";

const resData = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    resMenuData();
  }, []);

  const resMenuData = async () => {
    const response = await fetch(resMenuAPI + resId);
    const json = await response.json();
    setResData(json);
  };
  return resData;
};
export default resData;
