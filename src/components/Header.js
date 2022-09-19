const Header = (props) => {
  console.log(props);
  props.log("from Header");
  console.log(props.children);
  return (
    <div style={{ color: props.color }}>
      <div>{props.data}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Header;
