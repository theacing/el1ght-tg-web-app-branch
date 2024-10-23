"use client";

import {useState, useEffect} from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
  photo_url?: string;
}

interface UserDataProps {
}

const UserData: React.FC<UserDataProps> = ({
}) => {
    const [telegramId, setTelegramId] = useState<string | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [hash, setHash] = useState<string | null>(null);

    const loadWebApp = async () => (await import('@twa-dev/sdk')).default;

    const loadData = async () => {
        const WebApp = await loadWebApp()

        WebApp.ready();
        WebApp.expand();

        const initDataString = WebApp.initData;
        console.log(initDataString)
        if (initDataString) {
          const urlParams = new URLSearchParams(initDataString);
          try {
            const user = JSON.parse(urlParams.get('user') || '{}');
            if (user.id) {
              setTelegramId(user.id.toString());
            }
          } catch (error) {
            console.error('Error parsing user data:', error);
          }
        }

        if (WebApp.initDataUnsafe.user as UserData) {
          setUserData(WebApp.initDataUnsafe.user as UserData)
          setHash(WebApp.initDataUnsafe.hash)
        }
    }

    useEffect(() => {
        loadData()
    }, []);


    return userData ? <div className="h-full">
             <div className="mb-4">
               <h1 className="text-black text-xl font-semibold">
                 Welcome Home, {userData.first_name}
               </h1>
               <h2 className="text-black text-lg">
                 See what we have for you
               </h2>
             </div>

             <div className="grid grid-rows-8 grid-cols-5 md:grid-rows-10 md:grid-cols-10 gap-2 h-full">
              <div className="bg-[#424242] row-span-2 col-span-5 md:row-span-2 md:col-span-full rounded-3xl overflow-hidden "></div>
              <div className={'bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-1 rounded-3xl overflow-hidden'}></div>
              <div className={'bg-[#424242] row-span-6 col-span-2 md:row-span-2 md:col-span-full bred-4 rounded-3xl overflow-hidden'}></div>
              <div className={'bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-2 rounded-3xl overflow-hidden '}></div>
              <div className={'bg-[#424242] row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-3 rounded-3xl overflow-hidden'}></div>
               {/* <LikedWidget href={'liked'} name={'Liked Songs'} className="bg-[#424242] row-span-2 col-span-5 md:row-span-2 md:col-span-full rounded-3xl overflow-hidden" />

               <LeftWidget href={'top-charts'} name={'Top Charts'} className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-1'} />

               <VerticalWidget href={'you-may-like'} name={'YOU'} className={'row-span-6 col-span-2 md:row-span-2 md:col-span-full bred-4'} />

               <LeftWidget href={'world-top'} name={'World Top'} className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-2'} />

               <LeftWidget href={'week-hot'} name={'Week Hot'} className={'row-span-2 col-span-3 md:row-span-2 md:col-span-full bred bred-3'} /> */}

             </div>
           </div> : <div>Loading...</div>;
};

export default UserData;