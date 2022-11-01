import "./style.css";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";
import images from "../../assets/images/login-img1.jpg";
import { Form, Checkbox, Button, Input } from "antd";

const Auth = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = (user, pass) => {
    console.log('Submit successfull')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={images} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Đăng nhập</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
          >
            <Input
              placeholder="Tên đăng nhập hoặc Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Nhớ mật khẩu</Checkbox>
            <Link to="/auth/forgot">Quên mật khẩu?</Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSubmit}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Auth;