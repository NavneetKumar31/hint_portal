import React, { Component } from "react";
import { getPosts, deletePost } from "../../../services/postsService";
import InfoPanel from "../../../common/infoPanel";
import Table from "../../../common/table";
import { tableConstants } from "../../../common/tableConstant";

class SharePoint extends Component {
  state = {
    columns: [
      {
        title: "ID",
        value: "id",
      },
      // {
      //   title: "User Id",
      //   value: "userId",
      // },
      {
        title: "Title",
        value: "title",
      },
      {
        title: "Message",
        value: "body",
      },
    ],
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await getPosts();
    this.setState({ posts });
  }

  handleEdit = (post) => {
    this.handleRoute(post.id);
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = originalPosts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await deletePost(post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      this.setState({ posts: originalPosts });
    }
  };

  handleRoute = (param) => {
    const routePath = "/rules-extraction/ingestion/sharepoint-form/" + param;
    this.props.history.push(routePath);
  };

  render() {
    return (
      <div className="sharepoint-repo">
        <div className="wrapper">
          <InfoPanel
            title="Sharepoint Repository"
            subtitle="Here you can manage your sharepoint data."
            btnLabel="Add Sharepoint"
            onRoute={this.handleRoute}
          />
          <Table
            cols={tableConstants(
              this.state.columns,
              this.handleEdit,
              this.handleDelete
            )}
            isHovered={true}
            data={this.state.posts}
          />
        </div>
      </div>
    );
  }
}

export default SharePoint;
