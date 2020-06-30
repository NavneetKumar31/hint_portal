import React from "react";
import Form from "../../../common/form";
import Joi from "joi-browser";
import { getPost, savePost } from "../../../services/postsService";

class PostForm extends Form {
  state = {
    data: {
      userId: 1,
      id: 0,
      title: "",
      body: "",
    },
    title: "",
    errors: {},
  };

  schema = {
    id: Joi.number(),
    title: Joi.string().required().label("Title"),
    userId: Joi.number().integer().label("User Id"),
    body: Joi.string().required().label("Message"),
  };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    if (postId === "new") {
      this.setState({ title: "Add new post" });
      return;
    }

    this.setState({ title: `Edit Post with id: ${postId}` });
    const { data: post } = await getPost(postId);
    if (!post) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(post) });
  }

  mapToViewModel(post) {
    return {
      id: post.id,
      title: post.title,
      userId: post.userId,
      body: post.body,
    };
  }

  doSubmit = () => {
    savePost(this.state.data);
    this.props.history.push("/rules-extraction/ingestion/sharepoint");
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
                {this.renderInput("title", "Title")}
                {this.renderTextArea("body", "Message")}
                {this.renderButton("Save")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
