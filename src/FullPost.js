import { useParams } from 'react-router-dom';

function FullPost() {
  const { id } = useParams();

  return <h1>{id}</h1>;
}

export default FullPost;
