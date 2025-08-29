import PostList from './components/PostList';
import UserList    from './components/UserList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Playwright Demo</h1>
      <UserList />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
