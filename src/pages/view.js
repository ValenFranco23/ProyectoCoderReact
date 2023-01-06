import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  return (
    <Layout>
      <h2>{item.titulo}</h2>
      <div>{item.cover}<img src={item.cover} width="400" /> : ""</div>
      <div>{item.autor}</div>
      <div>{item.intro}</div>
      <div>{item.review}</div>
    </Layout>
  );
}
<div>{!!cover ? <img src={cover} width="200" /> : ""}</div>