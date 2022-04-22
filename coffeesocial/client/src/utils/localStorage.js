// Collect the comment ids and save them to an array
export const getSavedCommentIds = () => {
    const savedCommentIds = localStorage.getItem("saved_comments")
    ? JSON.parse(localStorage.getItem('saved_comments'))
    : [];

    return savedCommentIds;
};

export const saveCommentIds = (commentIdArr) => {
    if (commentIdArr.length) {
        localStorage.setItem('saved_comments', JSON.stringify(commentIdArr));
    } else {
        localStorage.removeItem('saved_comments');
    }
};

// Collect all saved post Ids and save to local storage array
export const getSavedPostIds = () => {
    const savedPostIds = localStorage.getItem('saved_posts')
    ? JSON.parse(localStorage.getItem('saved_posts'))
    : [];

    return savedPostIds;
};

export const savePostIds = (postsIdArr) => {
    if (postsIdArr.length) {
        localStorage.setItem('saved_posts', JSON.stringify(postsIdArr));
    } else {
        localStorage.removeItem('saved_posts');
    }
};