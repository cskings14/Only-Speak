import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";

function ProtectedPage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res  = await (
          await fetch(
              'http://127.0.0.1:8000/api/articles/1/', {
              method: "GET"
          })
      ).json();
      setRes(res);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Projected Page</h1>
      <p>{res.author}</p>
    </div>
  );
}

export default ProtectedPage;