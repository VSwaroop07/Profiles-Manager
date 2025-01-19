import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import { db } from "./config/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";
import NoProfile from "./components/NoProfile";

function App() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const profileRef = collection(db, "profile");
        // const contactsSnapshot = await getDocs(contactsRef);
        // console.log(profileRef);
        onSnapshot(profileRef, (snapshot) => {
          const profileList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setProfile(profileList);
          return profileList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProfiles();
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mr-8 md:mr-8">
      {profile.length <= 0 ? <NoProfile /> : profile.map((profile) => (
            <UserCard key={profile.id} profile={profile} />
          ))}
      </div>
    </>
  );
}

export default App;
