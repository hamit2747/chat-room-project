 //!Kurulumu önce firebase'den yaptık sonra projemizden yaptık

//!Firebase ile proje arasındaki bağlantı için gerekli kodlar

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdjUC0ugmuaye5uGjGA4NkS08h7qC2VEw",
  authDomain: "hi-chat-8ac67.firebaseapp.com",
  projectId: "hi-chat-8ac67",
  storageBucket: "hi-chat-8ac67.appspot.com",
  messagingSenderId: "1049243361655",
  appId: "1:1049243361655:web:22e532e6109e3acabc8172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//!Hazır kodlar yapıştırıldıktan sonra aşağıdaki adımları takip et 

//Authentication için bağlantıları import et
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
//yetkilendiremeyi aktif eder
export const  auth = getAuth(app)

//google yekilendirme için kurulum
export const provider = new GoogleAuthProvider()

//firestore database için import ettik
import { getFirestore } from "firebase/firestore";

//veritabanının referansını oluşturma 
export const db =  getFirestore(app)