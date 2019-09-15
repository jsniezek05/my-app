import React from 'react'

class Create extends React.Component {
  render() {
    return (
    	<div>
    		<ul class="nav nav-tabs">
        		<li role="presentation"><a href="/">MyBlog</a></li>
        		<li role="presentation" class="active"><a href="/create">Create Post</a></li>
      		</ul>
			<div class="form-group">
    			<input type="text" class="form-control" placeholder="Title">
    			</input>
    			<input type="text" class="form-control" placeholder="Date">
    			</input>
    			<input type="text" class="form-control" placeholder="Time">
    			</input>
    			<input type="text" class="form-control" placeholder="Content">
  				</input>
  			</div>
  			<button type="submit" class="btn btn-default">Submit</button>
    	</div>
    	

      )
  }
}
export default Create