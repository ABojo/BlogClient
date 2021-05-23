import Navbar from './Navbar';
import PostList from './PostList';
import FullPost from './FullPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto max-w-3xl p-5">
      <Navbar />
      <Router>
        <Route exact path="/" children={<PostList />} />
        <Route exact path="/posts/:id" children={<FullPost />} />
      </Router>
    </div>
  );
}

export default App;
