const TailwindPrefix = (prefix: string, className: string) => {
  let rs = '';
  const arr = className.split(' ');
  arr.forEach((element) => {
    rs += prefix + ':' + element + ' ';
  });
  return rs;
};

export default TailwindPrefix;
