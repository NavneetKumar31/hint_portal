import http from "./httpService";
import { apiUrl } from "../config.json";

const postsApiEndpoint = apiUrl + "posts";

function postsUrl(id) {
  return `${postsApiEndpoint}/${id}`;
}

export function getPosts() {
  return http.get(postsApiEndpoint);
}

export function getPost(postId) {
  return http.get(postsUrl(postId));
}

export function savePost(post) {
  if (post.id) {
    const body = { ...post };
    delete body.id;
    return http.put(postsUrl(post.id), body);
  }

  return http.post(postsApiEndpoint, post);
}

export function deletePost(postId) {
  return http.delete(postsUrl(postId));
}
