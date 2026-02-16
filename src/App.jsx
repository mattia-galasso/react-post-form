import axios from "axios";
import { useState } from "react";
import Alert from "./components/Alert";

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

const baseURL = "https://67c5b4f3351c081993fb1ab6.mockapi.io";

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [statusAPI, setStatusAPI] = useState(false);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSend = (e) => {
    e.preventDefault();

    setFormData(initialFormData);

    axios.post(baseURL + "/api/posts", formData).then((response) => {
      console.log(response);
      setStatusAPI(true);
    });
  };

  return (
    <>
      <div className="container">
        <div className="card my-4">
          <div className="card-header h3 text-center">Nuovo Post</div>
          <div className="card-body">
            {statusAPI && <Alert />}
            {statusAPI || (
              <form onSubmit={handleFormSend}>
                <label
                  htmlFor="authorInput"
                  className="col-sm-2 col-form-label"
                >
                  Autore
                </label>
                <input
                  //
                  value={formData.author}
                  onChange={handleFormChange}
                  name="author"
                  //
                  type="text"
                  className="form-control"
                  id="authorInput"
                />
                <label htmlFor="titleInput" className="col-sm-2 col-form-label">
                  Titolo
                </label>
                <input
                  //
                  value={formData.title}
                  onChange={handleFormChange}
                  name="title"
                  //
                  type="text"
                  className="form-control"
                  id="titleInput"
                />
                <label htmlFor="bodyInput" className="col-sm-2 col-form-label">
                  Descrizione
                </label>
                <input
                  //
                  value={formData.body}
                  onChange={handleFormChange}
                  name="body"
                  //
                  type="text"
                  className="form-control"
                  id="bodyInput"
                />
                <div className="form-check my-3">
                  <input
                    //
                    checked={formData.public}
                    onChange={handleFormChange}
                    name="public"
                    //
                    className="form-check-input"
                    type="checkbox"
                    id="publicCheck"
                  />
                  <label className="form-check-label" htmlFor="publicCheck">
                    Post pubblico
                  </label>
                </div>
                <button className="btn btn-primary">Aggiungi Post</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
