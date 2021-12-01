import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { useState } from "react";
import '../styles/formStyle.css'
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;


const Login = () => {
    const navigate = useNavigate()
    const [userLoginEmail, setUserLoginEmail] = useState('');
    const [userLoginPass, setUserLoginPass] = useState('');

    const loginHandler = async () => {
        try {
            const loginUser = await signInWithEmailAndPassword(auth, userLoginEmail, userLoginPass);
            if (loginUser) {
                navigate('../home')

            }
            console.log(loginUser)
        }
        catch (error) {
            console.log(error.message)
        }
    }



    return (
        <div>
            <Header>
                <h1 className="my-1">LOGIN FORM</h1>
            </Header>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}

            >      <Form.Item
            className="my-5 w-50 mx-auto"
                label="UserEmail"
                name="userLoginEmail"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                ]}
            >
                    <Input onChange={(e) => { setUserLoginEmail(e.target.value) }} />
                </Form.Item>

                <Form.Item
                 className="my-5 w-50 mx-auto"
                    label="Password"
                    name="userLoginPass"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password onChange={(e) => { setUserLoginPass(e.target.value) }} />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className="mx-5" onClick={loginHandler} type="primary" htmlType="submit">
                        Login
                    </Button> Or
                    <Link to="/" className="mx-3">Signup</Link>
                </Form.Item>
            </Form>
        </div>

    )
}
export default Login;