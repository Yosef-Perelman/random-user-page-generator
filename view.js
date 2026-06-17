function generateFriendsList(friends) {
  const liList = [];
  for (const name of friends) {
    const element = document.createElement("div");
    element.textContent = name;
    liList.push(element);
  }
  return liList;
}

export { generateFriendsList };
