
function stripProperty(obj, prop) {
    // write your code here

    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    }
    return obj;
  }

  const object = {
    foo:2,
    bar:2,
    biz:4
  }
  console.log(stripProperty(object, 'food')); 