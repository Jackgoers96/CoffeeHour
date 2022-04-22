import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts { 
        _id
        postContent
        createdAt
      }
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
export const QUERY_POSTS = gql`
  query getPosts{
    posts {
      _id
      postName
      postContent
      parentFolder
      
    }
  }
`;
export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postName
      postContent
      createdAt
    }
  }
`;
export const QUERY_COMMENTS = gql`
  query comments {
    comments {
      _id
      commentText
      commentAuthor
    }
  }
`;
export const QUERY_SINGLE_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
    comment(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      posts {
        _id
        postName
        postContent
        createdAt         
      }
    }
  }
`;



