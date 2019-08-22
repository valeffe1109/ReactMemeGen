import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';


const MemeCreate = ({match}) => (

    console.log(match),

    <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
   <img className="img-fluid" src={"https://i.imgflip.com/"+match.params.url}/>
   </div> 
   <div className="col-md-6">
   <Form>
        <FormGroup>
          <Label for="Text1">Text1</Label>
          <Input type="text" name="text1" id="Text1" placeholder="Text1" />
        </FormGroup>
        <FormGroup>
          <Label for="Text1">Text2</Label>
          <Input type="text" name="text2" id="Text2" placeholder="Text2" />
        </FormGroup>  
        </Form>
        </div>
   </div>
    </div>
)



export default MemeCreate;