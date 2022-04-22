import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
    mutation addComment($CommentText: String!) {
        addComment(commentText: $commentText) {
        _id
           
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser( $email: String!, $password: String!) {
    addUser( email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($PostText: String!, $PostName: String!, $parentFolder: String) {
    addPost(PostText: $PostText, PostName: $PostName, parentFolder: $parentFolder) {
      _id
     PostName
   
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($_id: ID!, $PostText: String!, $PostName: String!, $parentFolder: String) {
    updatePost(_id: $_id, PostText: $PostText, PostName: $PostName, parentFolder: $parentFolder) {
      _id
     PostName
   
    }
  }
`;

export const DELETE_FOLDER = gql`
  mutation deleteFolder($folderId: ID!) {
    deleteFolder(folderId: $folderId) {
      _id
    }
  }
`;

export const DELETE_SNIPPET = gql`
  mutation deleteSnippet($_id: ID!) {
    deleteSnippet(_id: $_id) {
      _id
    }
  }
`;