
import React from "react";

const Taskcard = ({
  title,
  desc,
  endDate,
  assignTo,
  assignedBy,
  createdAt,
  status,
  role,
}) => {
  console.log(role);

  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{status}</p>

      <p>
        createdAt:{" "}
        {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p>
        endDate:{" "}
        {new Date(endDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {role == "user" ? <p>{assignedBy?.name}</p> : <p>{assignTo?.name}</p>}
    </div>
  );
};

export default Taskcard;
