const arr = ["cat", "bat", "Mat", "rat", "", "Cat", "cat", "rat", ""];
const output = ["bat", "cat", "Mat", "rat", ""];

const customSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] === "") {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else if (
        arr[j].toLowerCase() > arr[j + 1].toLowerCase() &&
        arr[j + 1] !== ""
      ) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const filterfunc = (arr) => {
  let filterdarr = [];
  for (let i = 0; i < arr.length; i++) {
    let lowerVal = arr[i].toLowerCase();
    let isDuplicate = false;
    for (let j = 0; j < filterdarr.length; j++) {
      if (lowerVal === filterdarr[j].toLowerCase()) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      filterdarr[i] = arr[i];
    }
  }
  return customSort(filterdarr);
};

console.log(filterfunc(arr));
