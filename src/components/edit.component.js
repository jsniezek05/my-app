
import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class EditPost extends React.Component {

  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      date: new Date(),
      content: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/post/'+this.props.match.params.id)
      .then(res => 
        this.setState({
          title: res.data.title,
          description: res.data.description,
        
          content: res.data.content
        })
      );

    
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
  onChangeDate(date){
    this.setState({
      date: date
    });
  }
  onChangeContent(e){
    this.setState({
      content: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      content: this.state.content
    }

    console.log(post);

    axios.post('http://localhost:5000/post/update/'+this.props.match.params.id, post)
      .then(res => console.log(res.data));

  }


  render() {
    return (
      <div>
        <h3>Edit Post</h3>
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
            <label>Date</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div> 
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
            <input type="submit" value="Edit New Post" className="btn btn-primary" />
          </div>

        </form>
      </div>
      

      )
  }
}
export default EditPost