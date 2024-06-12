import { getCurrentUser } from '../services/apiAuth';
import { useEffect, useState } from 'react';
const Dashboard_66 = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getCurrentUser()
      .then((data) => {
        console.log('DashBoard UserData', data);
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  return (
    <>
      <h1>Final-2 Exam of Web Prog 2,2024</h1>
      <p>Guest name : 劉泓伸</p>
      <p>Guest ID : 211410666</p>
      <p>Supabase email : {userData.email}</p>
      <p>Supabase user id : {userData.id}</p>
    </>
  );
};

export default Dashboard_66;
