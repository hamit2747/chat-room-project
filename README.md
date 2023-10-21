# CHAT ROOM PROJECT

![view gif](chat-room.gif)

# USED TECHNOLOGIES
- React Vite
- Firebase 
- SASS

# Description:
The project represents a Chat Room application developed using Firebase. With this application, users can come together in specific rooms and engage in live chats. Thanks to Firebase's database and authentication features, users can sign in, join chat rooms, and send messages.






# Using Firebase:
- Installation was done first from Firebase and then from our project.

- Necessary code for the connection between Firebase and the project:

- Import connections for Authentication
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

>  Authorization :
export const auth = getAuth(app)

 - Setup for Google authentication
export const provider = new GoogleAuthProvider()

 - In the authentication section, we selected authorized domains in the settings and registered our domain.

 - All information can be found in the Firebase docs.

> Authentication:

 - Password, fingerprint, face recognition
Authorization:

- Determining the user's permissions after authentication (which pages they can access, etc.)
How to Create a Firestore Database:

# Firebase Database
- First, we clicked on Firestore database in Firebase and created a collection (a database where we store an ID, date, and messages)