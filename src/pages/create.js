import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  const [title, setTitulo] = useState("");
  const [author, setAutor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [review, setReview] = useState("");

  const store = useAppContext();

  const inputStyles = {
    formContainer: {
      width: "400px",
    },
    container: {
      display: "flex",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
    },
  };

  function handleChange(e) {
    switch (e.target.name) {
      case "titulo":
        setTitulo(e.target.value);
        break;
      case "autor":
        setAutor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      titulo,
      autor,
      cover,
      intro,
      review,
    };

    store.createItem(newBook);
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Titulo</div>
          <input
            style={inputStyles.input}
            type="text"
            name="titulo"
            onChange={handleChange}
            value={titulo}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Autor</div>
          <input
            style={inputStyles.input}
            type="text"
            name="autor"
            onChange={handleChange}
            value={autor}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{ cover <img src={cover} width="200" /> : ""}</div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>intro</div>
          <input
            style={inputStyles.input}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>review</div>
          <input
            style={inputStyles.input}
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input
          type="submit"
          value="Registrar libro"
          style={{
            padding: "15px 20px",
            border: "none",
            backgroundColor: "#1e9638",
            color: "white",
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}
