export function searchItems(array, type, item) {
  //first param is data array,
  //second property of object to be targeted,
  //3rd one is our input text for search

  function multiTypes(type, v) {
    const data = type.map((val) => {
      return JSON.stringify(v[val])
        .toLocaleLowerCase()
        .includes(item.toLocaleLowerCase());
    });

    return data.filter((v) => v === true).length > 0
      ? data.filter((v) => v === true)[0]
      : false;
  }

  return item !== ''
    ? array.filter((v) =>
        type.length > 1
          ? multiTypes(type, v)
          : JSON.stringify(v[type[0]])
              .toLocaleLowerCase()
              .includes(item.toLocaleLowerCase()),
      )
    : array;
}

function toggleLikes(
  index,
  data,
  setData,
  changeInObject,
  secondChild,
  status,
) {
  let duplicate = [...data];
  duplicate[index] =
    changeInObject.length === 1
      ? {
          ...data[index],
          likes:
            status === 'add' ? changeInObject[0] + 1 : changeInObject[0] - 1,
          status: 0,
        }
      : {
          ...data[index],
          [secondChild]: {
            ...changeInObject[0],
            likes:
              status === 'add' ? changeInObject[1] + 1 : changeInObject[1] - 1,
          },
        };
  setData(duplicate);
}

export function handleLikes(
  item,
  index,
  likeArray,
  setLikeArray,
  data,
  setData,
  changeInObject,
  secondChild,
) {
  if (likeArray.includes(item.id)) {
    const filteredArray = likeArray.filter((v) => v !== item.id);
    setLikeArray(filteredArray);

    toggleLikes(index, data, setData, changeInObject, secondChild, 'subtract');
  } else {
    setLikeArray([...likeArray, item.id]);

    toggleLikes(index, data, setData, changeInObject, secondChild, 'add');
  }
}
