import { useState } from "react";

const initialFormData = {
  author: "",
  title: "",
  body: "",
  publicPost: true,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e) => {
    console.log("Name: ", e.target.name);
    console.log(
      "Value: ",
      e.target.type === "checkbox" ? e.target.checked : e.target.value,
    );

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="card my-4">
          <div className="card-header h3 text-center">Nuovo Post</div>
          <div className="card-body">
            <form>
              <label htmlFor="authorInput" className="col-sm-2 col-form-label">
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
                  checked={formData.publicPost}
                  onChange={handleFormChange}
                  name="publicPost"
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
          </div>
        </div>
      </div>
    </>
  );
}
