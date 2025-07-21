const BlurCircle = ({ top, left, right, bottom }) => {
  const style = {};
  if (top !== undefined) style.top = top;
  if (left !== undefined) style.left = left;
  if (right !== undefined) style.right = right;
  if (bottom !== undefined) style.bottom = bottom;

  return (
    <div
      className="absolute -z-50 w-56 aspect-square rounded-full bg-primary/30 blur-3xl"
      style={style}
    />
  );
};

export default BlurCircle;
