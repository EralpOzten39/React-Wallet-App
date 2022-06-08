import "./FilterComBox.css";

const FilterComBox = (props) => {
  const { title, firstMsg, setVal, items } = props;
  return (
    <div className="main-cbox">
      <h1>{title}</h1>
      <select onChange={(event) => setVal(event.target.value)}>
        <option key={""} value={""}>
          {firstMsg}
        </option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComBox;
