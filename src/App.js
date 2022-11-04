import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Main">
      <div className="Main_login">
        <div className="Main_login-text">
          <div className="Main-word">
            <img src={logo} alt="" width={40} height={40} />
            <h5>Untitled UI</h5>
          </div>

          <div className="Main_login-part">
            <h1>Welcome back, Olivia</h1>
            <h5 className="Or">Continiue with Google or enter your details</h5>
            <button className="Btn">
              <img className="Google" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="" />
              <p>Log in with Google</p>
            </button>
            <div className="Hr"><hr /><p>or</p><hr /></div>
            <form action="" className="Form">
              <div className="input-1">
                <input type="text" required className="Email"/>
                <br />
                <label className="label-inp">Email</label>
              </div>

              <div className="input-1">
                <input type="text" required className="Email"/>
                <br />
                <label className="label-inp">Password</label>
              </div>
              <br />
            </form>
            <div className="Remember">
              <div className="Remember-radio">
                <input className="abca" type="checkbox" name="abca" id="" />
                <label htmlFor="abca">Remember for 30 days</label>
              </div>

              <a
                className="btm"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forgot password</a>

            </div>

            <button className="Login">Log in</button>
            <p className="Padaaas">Don't have an account?<a
              className="btm"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up for free</a></p>
          </div>
        </div>
        <div className="Main_login-img Main_img">
          <img className='Walpaper' src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
