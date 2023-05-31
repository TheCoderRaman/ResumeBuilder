import NavBar from './../Components/Header/NavBar';

export default function Page({children}){
    return (
        <>
            {/* Here we add our navbar */}
            <NavBar/>

            {/* Here we add page body */}
            {children}

            {/* Here we can add page footer */}ī
            {/* But... for now we really does not need it */}
        </>
    );
}