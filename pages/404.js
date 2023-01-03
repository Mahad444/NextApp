import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{

        setTimeout(()=>{
        //  router.go(-1)
        router.push('/');
        },3000)
    },[])
    return ( 
        <div>
            <h1>404 Error!</h1>
            <h1>Oooops.......</h1>
            <p>This Page is NotFound</p>
            <Link legacyBehavior href={'/'}><a className="not-found">HomePage</a></Link>
        </div>
     );
}
 
export default NotFound