const SortButton = ({ children, sortHandle }) => {
  return (
    <div>
      <button onClick={sortHandle}>{children}</button>
    </div>
  );
};

export default SortButton;
