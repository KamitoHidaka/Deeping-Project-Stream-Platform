import { Link } from 'react-router-dom';
export const Billboard = ({movie, url, img, name}) =>{
    return(
        // <div className='billboard-container'>
        //     <Link to={"/Summary/" + movie.id}>
        //         <div className='billboard-image'
        //             style={{
        //                 backgroundImage: `url(${movie.billboard})`
        //             }}>
        //         </div> 
        //         <p>{movie.title}</p>
        //     </Link>
        // </div>
        <div className='billboard-container'>
            <Link to={"/Summary/"+url}>
                <div className='billboard-image'
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
                </div> 
                <p>{name}</p>
            </Link>
        </div>     
        
    );
}