import "./ListComp.css";

const ListComp = (props) => {
  const { items } = props;
  return <div className="main-list">{items.map((item) => item)}</div>;
};

export default ListComp;
