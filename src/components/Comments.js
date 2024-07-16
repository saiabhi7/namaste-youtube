import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const comments = [
  {
    name: "Akshay Saini",
    text: "This is Akshay Saini",
    replies: [],
  },
  {
    name: "Sai Kumar",
    text: "This is Sai Kumar",
    replies: [
      {
        name: "Manoj Reddy",
        text: "This is Manoj Reddy",
        replies: [
          {
            name: "Mahathi",
            text: "This is Mahathi",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Raghu Kumar",
    text: "This is Raghu Kumar",
    replies: [
      {
        name: "Shiva Kumar",
        text: "This is Shiva Kumar",
        replies: [],
      },
    ],
  },
  {
    name: "Vamshi",
    text: "This is Vamshi",
    replies: [],
  },
];

const Comments = () => {
  return (
    <div>
      <div className="my-3 font-bold text-2xl">Comments:</div>
      <CommentsList comments={comments} />
    </div>
  );
};

export default Comments;
