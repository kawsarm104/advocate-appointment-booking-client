import axios from "axios";
import { useEffect, useState } from "react";
const useAllAdvocate = (flag) => {
  const [allAdvocate, setAllAdvocate] = useState([]);

  useEffect(() => {
    const url = "https://fathomless-coast-82114.herokuapp.com/advocates";
    axios.get(url).then((res) => {
      console.log(res.data);
      setAllAdvocate(res.data);
    });
  }, [!flag]);
  return [allAdvocate, setAllAdvocate];
};
export default useAllAdvocate;
