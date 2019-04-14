import React, { Component, Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../css/Login.css';

class SignUp extends Component{
	
	
	state = {
		host : this.props.host,
		user_id : '',
		user_pwd : '',
	};

	handleChange = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		});
	};
	
	onSubmit = () =>{
		console.log(this.state.host);
		//console.log(this.state.user_id, this.state.user_pwd);
		const id = this.state.user_id;
		const password = this.state.user_pwd;
		// 빈공간 체크
		if(!id || !password){
			alert('정확하게 입력해주세요');
			return;
		}
		
		
		axios.post(`${this.state.host}/api/users`, {id, password}).then(
			res=>{
				console.log('회원가입 성공');
				this.props.history.push('/Login');
			}
		);
	};
	
	render(){
		
		return (
			<Fragment>
				<article className="container">
					<div className="col align-self-center logo_container">
						<h1>Sign Up</h1>
					</div>
					<div className="col-6 align-self-center margin_center">
						<Form className="login_form">
							 <Form.Group controlId="formBasicEmail">
								<Form.Label>ID</Form.Label>
								<Form.Control type="text" placeholder="ID" name="user_id" 
									onChange={this.handleChange} value={this.state.user_id}/>
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" name="user_pwd"
									onChange={this.handleChange} value={this.state.user_pwd} />
							  </Form.Group>
							<div className="btn_container">
								<Button className="btn" variant="outline-secondary" type="button" onClick={this.onSubmit}>Sign up</Button>
							</div>
						</Form>
					</div>
				</article>	
			</Fragment>
		)
	};
};

export default SignUp;