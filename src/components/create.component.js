
import React from 'react'

class Create extends React.Component {
  render() {
    return (
    	<div>
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