import { addDoc, collection,onSnapshot,serverTimestamp,query,where,orderBy} from "firebase/firestore";
import { auth ,db } from "../firebase/config"
import { useEffect, useState } from "react";
import Messages from "../components/Messages";
addDoc



const Chat = ({room,setRoom}) => {
//güncelliyeceğimiz  kolleksiyonun referansını alma
const messagesCol = collection(db ,'messages');
const [messages,setMessages] =useState(null)




//mesajı veritabanına ekler
  const handleSubmit  = async(e)=>{
    e.preventDefault();
   const text = e.target[0].value;

   // add doc yeni döküman ekler
   //add doc iki parametre ister
   //! 1-ekleyecğimiz kolleksiyonun referansı
   //! 2-data

   await addDoc(messagesCol,{
    text,
    room,
    user:{
      name:auth.currentUser.displayName,
      photo:auth.currentUser.photoURL,      // > özellikle istedeiğimiz verileri çektik (user:auth.currentUser diyebilirdik)
      uid:auth.currentUser.uid
    },
    // server'ın zamanı oluşturmasını sağlar
    createdAt: serverTimestamp(),
   })
}

useEffect(()=> {
//filtreleme ayarlarını tanımlama
const queryOptions = query(
  messagesCol,
  where('room','==',room),
  orderBy('createdAt','asc'))

  //onSnapshot kolleksiyon her değiştiğinde bir fonksiyon çalıştırır ve fonksiyona güncel dökümanları parametre olarak gönderir
  onSnapshot(queryOptions,(snapshot)=>{

    let tempMessages = []
    //dökümanları dönüp içerisindeki data metoduyla verilre erişip + dökümanın id'sini ekleyip yeni diziye aktarma
    snapshot.docs.forEach(doc => tempMessages.push({id:doc.id, ...doc.data()}))
    //state'i güncelle
  setMessages(tempMessages);
  })

},[])
  return (
    <div className='chat'>
    <header>
      <p className="user">{auth.currentUser.displayName}</p>
      <p>{room}</p>
      <button onClick={()=> setRoom(null)}>Farklı Oda</button>
    </header>
    <main>{messages?.map((msg)=> <Messages key={msg.id} msg ={msg} />)}</main>
    <form onSubmit={handleSubmit} >
      <input required type="text" placeholder="mesajınızı yazınız..." />
      <button>Gönder</button>
    </form>
    </div>
  )
}

export default Chat
