import { useParams, useNavigate } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {id}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default PostDetails;
