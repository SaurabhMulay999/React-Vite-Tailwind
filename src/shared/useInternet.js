import { useEffect, useState } from "react"

const useInternet=()=>{
    const[isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        //use eventListner to check if online or Offline
        function CheckOnline(){
            setIsOnline(true);
        }
        function CheckOffline(){
            setIsOnline(false);
        }
        addEventListener('online',CheckOnline);
        addEventListener('offline',CheckOffline);
        
        //clean up the mess as event listner still hand to js engine if aint cleared

        //return isOnline;

        return ()=>{
            removeEventListener('online',CheckOnline);
            removeEventListener('offline',CheckOffline);
        }

       

    },[])
    return isOnline;
}

export default useInternet;