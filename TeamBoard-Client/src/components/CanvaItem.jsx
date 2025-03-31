const CanvaItem = ({ image, name, description}) => {


    
    return (
        <div className="canva-item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        </div>
    );

}


export default CanvaItem;

