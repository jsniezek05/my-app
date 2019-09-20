import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Post = props => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h1>{props.post.title}</h1>
      <p>{props.post.description}</p>
      <p>{props.post.date.substring(0,10)}</p>
    </div>
    <div className="panel-body">
      {props.post.content}
      <br />
      <br />
      <Link to={"/edit/"+props.post._id}>Edit</Link> | 
      <Link to="/" onClick={() => {props.deletePost(props.post._id)}}> Delete </Link>
    </div>
  </div>
)
   

class Home extends React.Component {
  constructor(props){
    super (props);

    this.deletePost = this.deletePost.bind(this);

    this.state = {posts:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/post/')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePost(id) {
    axios.delete('http://localhost:5000/post/'+id)
      .then(res => console.log(res.data));

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    })
  }

  postList(){
    return this.state.posts.map(currentpost => {
      return <Post post={currentpost} deletePost={this.deletePost} key={currentpost._id} />;
    })
  }

  render() {
    return (
      <div>
        { this.postList() }
      </div>
      )
  }
}

export default Home