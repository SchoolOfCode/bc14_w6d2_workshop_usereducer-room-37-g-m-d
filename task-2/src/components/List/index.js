function List({ items, id }) {
  console.log("rendering list component")
  console.log(id);
  return (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export default List;
