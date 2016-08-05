import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var observationsBox = {
    // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
    width: "75%",
    minHeight: "20%",
    margin: "20px auto",
    WebkitTransition: 'all',
    msTransition: 'all',
 };

 var sendbutton = {
   marginRight: "130px",
   float: "right",
 }

 var gmtbutton = {
   width: "75px",
   height: "30px",
   marginRight: "130px",
   float: "right",
 }

var display = {
  marginLeft: "170px",
  color: "darkgoldenrod",
  fontWeight: "bold",
  fontFamily: "Syncopate",
}

var gmtdisplay = {
  marginLeft: "444px",
  marginRight: "130px",
  float: "right",
  fontWeight: "bold",
  color: "purple",
  fontFamily: "Syncopate",
  textAlign: "right",
  display: "inline-block",
  width: "150px",

}

export default class ChatForm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      message: "",
      gmt:''
    }
  }
  handleSendButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("gmt ", this.state.enteredGmt);
    console.log("message ", this.state.enteredMessage);
    this.props.onNewMsg.bind(this)(this.state.enteredGmt, this.state.enteredMessage);
  }
  handleMessageChange(e){
    //we have a value
    console.log("message ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredMessage: e.target.value});
  }
  handleGmtChange(e){
    //we have a value
    console.log("GMT ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredGmt: e.target.value});
  }

  render (){
    return (
      <div>
        <div>
          <Form type="inline" onSubmit={this.handleSendButtonClick.bind(this)}>

                <Row>
                  <Col sm="1/2">
                    <h2 style={display}> Nickname: {this.props.nickname}</h2>
                  </Col>
                  <Col sm="1/2">
                    <h2 style={gmtdisplay}>GMT: </h2>
                    <FormInput  style={gmtbutton} type="text" placeholder="GMT" name="GMT" onChange={this.handleGmtChange.bind(this)} />
                  </Col>
                </Row>
                <Row>
                    <FormInput style={observationsBox} placeholder="Record observations here" multiline onChange={this.handleMessageChange.bind(this)} />
                </Row>
                <Row>
                  <Col>
                    <Button size="sm" style={sendbutton} onClick={this.handleSendButtonClick.bind(this)}>Send Message</Button>
                  </Col>
                </Row>
              </Form>

          </div>
      </div>
    );
  }
}
