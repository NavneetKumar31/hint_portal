import React from "react";
import Joi from "joi-browser";

import Form from "../../../common/form";

class ManualUploadForm extends Form {
  state = {
    data: {
      name: "",
      companyName: "",
      email: "",
      gender: "",
      city: "",
      country: "",
    },
    genders: [
      {
        _id: 1,
        name: "Male",
      },
      {
        _id: 2,
        name: "Female",
      },
      {
        _id: 3,
        name: "Other",
      },
    ],
    title: "",
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    companyName: Joi.string().required().label("Company Name"),
    email: Joi.string().required().email().label("Email"),
    gender: Joi.string().required().label("Gender"),
    city: Joi.string().required().label("City"),
    country: Joi.string().required().label("Country"),
  };

  componentDidMount() {
    const documentId = this.props.match.params.id;
    if (documentId === "new") {
      this.setState({ title: "Add new document" });
      return;
    }
    this.setState({ title: `Edit document with id: ${documentId}` });
    // const movie = getMovie(movieId);
    // if (!movie) return this.props.history.replace("/not-found");
    // this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    console.log(this.state.data);
    // saveMovie(this.state.data);
    this.props.history.push("/rules-extraction/ingestion/manual-upload");
  };

  render() {
    return (
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-card">
            <div className="form-card-header">
              <p className="title">{this.state.title}</p>
            </div>
            <div className="form-card-content">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("companyName", "Company Name")}
                {this.renderInput("email", "Email")}
                {this.renderInput("city", "City")}
                {this.renderInput("country", "Country")}
                {this.renderSelect("gender", "Gender", this.state.genders)}
                {this.renderButton("Save")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManualUploadForm;
