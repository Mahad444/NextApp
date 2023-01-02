import Link from "next/link";

const NavBar = () => {
    return (  
        
        <nav>
            <>
            <h1>NavBar Comp</h1>

           <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/mahad/test'}>Mahad Listings</Link> 
            </>
        </nav>

    );
}
 
export default NavBar;