import Link from "next/link";

const NavBar = () => {
    return (  
        
        <nav>
            <div className="logo">
            <h1>NavBar Comp</h1>

           <Link legacyBehavior href={'/'}><a>Home</a></Link>
            <Link legacyBehavior href={'/about'} ><a className="nava">About</a></Link>
            <Link legacyBehavior href={'/mahad/test'}><a className='nava' >Mahad Listings</a></Link> 
            </div>
        </nav>

    );
}
 
export default NavBar;  