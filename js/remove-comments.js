// This script removes all comments from the DOM to prevent view-source reveal of comments
document.addEventListener("DOMContentLoaded", function () {
    var comments = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT, null, false);
    var comment;
    while (comment = comments.nextNode()) {
        comment.parentNode.removeChild(comment);
    }
});
