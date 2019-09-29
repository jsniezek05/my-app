import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Article = props => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h1>{props.article.title}</h1>
      <p>{props.article.description}</p>
      <p>{props.article.date}</p>
    </div>
    <div className="panel-body">
      {props.article.content}
      <br />
      <br />
      <Link to={"/edit/" + props.article.id}>Edit</Link> | 
      <Link to="/" onClick={() => {props.deletePost(props.article.id)}}> Delete </Link>
    </div>
  </div>
)
   

class Home extends React.Component {
  constructor(props){
    super (props);

    this.deleteArticle = this.deleteArticle.bind(this);

    this.state = {articles:[]};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/article')
      .then(response => {
        this.setState(
          { articles: response.data }
          )
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteArticle(id) {
    axios.delete('http://localhost:5001/article/'+id)
      .then(res => console.log(res.data));

    this.setState({
      articles: this.state.articles.filter(el => el.id !== id)
    })
  }

  postArticle(){
    return this.state.articles.map(currentarticle => {
      return <Article article={currentarticle} deletePost={this.deleteArticle} key={currentarticle.id} />;
    })
  }

  render() {
    return (
      <div>
        { this.postArticle() }
      </div>
      )
  }
}

export default Home