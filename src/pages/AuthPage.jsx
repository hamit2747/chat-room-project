import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  //giriş yapma fonksiyonu 
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem('token', res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>
        <button onClick={handleClick}>
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google İle Giriş" />
          <span>Google İle Giriş Yap</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
