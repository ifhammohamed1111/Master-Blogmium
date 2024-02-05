import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
export default function Dashboard() {
  const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabForUrl = urlParams.get('tab');
      if(tabForUrl) {
        setTab(tabForUrl);
      }
      console.log(tabForUrl);
    }, [location]);

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
          <div className='md:w-55'>
            <DashSidebar />
          </div>
          {tab === 'profile' && <DashProfile />}
        </div>
  )
}
