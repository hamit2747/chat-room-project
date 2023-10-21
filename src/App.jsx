import './style.scss'
import AuthPage from "./pages/AuthPage"
import Chat from './pages/Chat'
import { useState } from 'react'
import { signOut,getAuth } from 'firebase/auth';


function App() {
  //kullanıcı yetkili mi stateti'ni tutuyoruz
  //state'in ilk değeri localdeki token'a göre belirlenir
  const [auth,setIsAuth] =useState(localStorage.getItem('token'))
  //kullanıcının girdiği odanın state'i 
  const[room,setRoom] = useState(null)
//form gönderildiğinde odayı belirler
  const handleSubmit = (e) =>{
    e.preventDefault();
   setRoom(e.target[0].value)

  }

 // yetki yoksa
  if(!auth){
 return <AuthPage setIsAuth={setIsAuth} />;
 }
// yetki varsa > sohbet
  return <div className='container'>
{room ?  
//odayı belirlediyse > sohbet
<Chat room ={room} setRoom ={setRoom}/> : (
//odayı belirlemediyse > oda seçme
<form onSubmit={handleSubmit} className='room-page'>
  <h1>Chat Odası</h1>
  <p>Hangi Odaya Gireceksiniz ?</p>
  <input type="text" placeholder='örn:haftaiçi' />
  <button type='submit' >Odaya Gir</button>
  <button onClick={() => {
          const auth = getAuth();
              signOut(auth)
                .then(() => {
                  // lokal'den token'ı kaldırma
                  localStorage.removeItem('token');
                  // yetkili state'ini false'a çek
                  setIsAuth(false);
                })
                .catch((err) => console.log(err));
            }}
            id="logout"
            type="button"
          >Çıkış Yap</button>
</form>)}
  </div>
}

export default App
