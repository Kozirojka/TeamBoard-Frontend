const CanvaItem = ({ item, onClick }) => {
    return (
      <div className="canva-item" onClick={onClick}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    );
  }


export default CanvaItem;

