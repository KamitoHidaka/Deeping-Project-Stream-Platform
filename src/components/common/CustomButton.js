import './CommonStyles.css';
export const CustomButton = ({name , onClick}) =>{
    return(
      <p className="button-container" onClick={onClick}>{name}</p>
    );

}

