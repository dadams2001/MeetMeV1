import './LoginFormComp.css';

const LoginFormComp = ({ onChangeUserName, onChangePassword, onSubmit }) => {
  return (
    <div className='LoginFormCompContainer'>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={onChangeUserName}
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChangePassword}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComp;