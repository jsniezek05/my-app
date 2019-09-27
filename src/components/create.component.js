
import React from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class Create extends React.Component {

  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      content: ''
    }
  }

  onChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }
  // onChangeDate(date){
  //   this.setState({
  //     date: date
  //   });
  // }
  onChangeContent(e){
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const article = {
      title: this.state.title,
      description: this.state.description,
      // date: this.state.date,
      content: this.state.content
    }

    console.log(article);

    axios.post('http://localhost:5001/article/', article)
      .then(res => console.log(res.data));

    window.location = "/";

  }


  render() {
    return (
    	<div>
        <h3>Create New Article</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
        		<input type="text"
              required 
              className="form-control" 
              value={this.state.title}  
              onChange={this.onChangeTitle} />
          </div>
          <div className="form-group">    
            <label>Description</label>
            <input type="text"
              required 
              className="form-control" 
              value={this.state.description}  
              onChange={this.onChangeDescription} />
          </div>
          <div className="form-group">    
            <label>Content</label>
            <input type="text"
              required 
              className="form-control" 
              value={this.state.content}  
              onChange={this.onChangeContent} />
          </div>  
      		<div className="form-group">	
            <input type="submit" value="Create New article" className="btn btn-primary" />
          </div>

        </form>
    	</div>
    	

      )
  }
}
export default Create