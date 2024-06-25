import { useNavigate } from "react-router-dom";

function UserItem({ props }) {
  const { name, username, id } = props;
  const navigate = useNavigate();

  return (
    <div className="user-container">
      <p className="user-container__text">
        <span className="user-container__text underline">Name</span>: {name}
      </p>
      <p className="user-container__text">
        <span className="user-container__text underline">Username</span>:{" "}
        <span
          onClick={() => navigate(`/users/${id}`, (props = { props }))}
          className="user-container__text_link"
        >
          {username}
        </span>
      </p>
    </div>
  );
}

export default UserItem;
