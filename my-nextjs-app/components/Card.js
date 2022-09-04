const cardStyle = {
    padding: 20,
    border: "1px solid #DDD",
    borderRadius: 4,
};

const Card = props => (
    <div style={cardStyle}>
        {props.children}
    </div>
);

export default Card;