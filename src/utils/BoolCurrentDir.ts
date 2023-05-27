const BoolCurrentDiv = (pathName: string, buttonContent: string): boolean => {
  let path = pathName.toLowerCase();
  path = path.substring(1);
  const index = path.indexOf('/');
  if (index > 0) path = path.substring(0, index);
  return path == buttonContent.toLowerCase();
};

export default BoolCurrentDiv;
