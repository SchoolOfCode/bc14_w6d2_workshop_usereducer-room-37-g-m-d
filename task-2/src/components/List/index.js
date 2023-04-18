function List({ items }) {
  console.log("rendering list component")
  // this will log each item's id
  // items.forEach(i => console.log(i.id))

  // this will log the id of the last item, if there is one
  const lastItem = items.slice(-1)[0];
  const lastItemId = lastItem ? lastItem.id : "there is no last item (yet)";
  console.log(lastItemId)
  
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ol>
  );
}

export default List;
