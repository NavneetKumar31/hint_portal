import React, { Component } from "react";
import InfoPanel from "../../../common/infoPanel";
import Table from "../../../common/table";
import { tableConstants } from "../../../common/tableConstant";

class ManualUploadRepo extends Component {
  state = {
    columns: [
      {
        title: "ID",
        value: "_id",
      },
      {
        title: "Name",
        value: "name",
      },
      {
        title: "Company Name",
        value: "companyName",
      },
      {
        title: "Email",
        value: "email",
      },
      {
        title: "Gender",
        value: "gender",
      },
      {
        title: "City",
        value: "city",
      },
      {
        title: "Country",
        value: "country",
      },
    ],
    data: [
      {
        _id: 1,
        name: "Karin",
        companyName: "Lajo",
        email: "kheintsch0@google.de",
        gender: "Female",
        city: "Ostrov",
        country: "Czech Republic",
      },
      {
        _id: 2,
        name: "Chevy",
        companyName: "Oyoloo",
        email: "cepinoy1@europa.eu",
        gender: "Male",
        city: "Quatro Barras",
        country: "Brazil",
      },
      {
        _id: 3,
        name: "Janifer",
        companyName: "Eadel",
        email: "jflipek2@nasa.gov",
        gender: "Female",
        city: "Tiandian",
        country: "China",
      },
      {
        _id: 4,
        name: "Samara",
        companyName: "Tekfly",
        email: "slucchi3@over-blog.com",
        gender: "Female",
        city: "Huyu",
        country: "China",
      },
      {
        _id: 5,
        name: "Kelsey",
        companyName: "Shufflester",
        email: "kstewartson4@fc2.com",
        gender: "Male",
        city: "Salt Lake City",
        country: "United States",
      },
      {
        _id: 6,
        name: "Darci",
        companyName: "Browsedrive",
        email: "dgaughan5@oracle.com",
        gender: "Female",
        city: "Unión de Reyes",
        country: "Cuba",
      },
      {
        _id: 7,
        name: "Morgen",
        companyName: "Cogidoo",
        email: "mhaestier6@bbc.co.uk",
        gender: "Female",
        city: "Azurduy",
        country: "Bolivia",
      },
      {
        _id: 8,
        name: "Letti",
        companyName: "Edgeify",
        email: "lguerrazzi7@usnews.com",
        gender: "Female",
        city: "Broshniv-Osada",
        country: "Ukraine",
      },
      {
        _id: 9,
        name: "Thorstein",
        companyName: "Zoozzy",
        email: "togborne8@wsj.com",
        gender: "Male",
        city: "Xinchengpu",
        country: "China",
      },
      {
        _id: 10,
        name: "Skipp",
        companyName: "Gigabox",
        email: "sweymont9@nih.gov",
        gender: "Male",
        city: "Yao’an",
        country: "China",
      },
    ],
  };

  handleRoute = (param) => {
    const routePath = "/rules-extraction/ingestion/manual-upload-form/" + param;
    this.props.history.push(routePath);
  };

  handleEdit = (document) => {
    this.handleRoute(document._id);
  };

  handleDelete = (document) => {
    console.log(document);
    const documents = this.state.data.filter((doc) => doc._id !== document._id);
    this.setState({ data: documents });
  };

  render() {
    return (
      <React.Fragment>
        <InfoPanel
          title="Manual Upload Repository"
          subtitle="Here you can manage your manually uploaded documents."
          btnLabel="Add Document"
          onRoute={this.handleRoute}
        />
        <Table
          cols={tableConstants(
            this.state.columns,
            this.handleEdit,
            this.handleDelete
          )}
          isHovered={true}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}

export default ManualUploadRepo;
