export const Billboard = ({imgsrc, name, onClick }) =>{
    return(
        <div className='billboard-container' onClick={onClick}>
            <div 
                className='billboard-image'
                style={{
                    backgroundImage: `url(${imgsrc})`, 
                    backgroundSize:'contain',
                    borderRadius: '1rem',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center'
                }}>
            </div> 
            <p>{name}</p>
        </div>
    );
}