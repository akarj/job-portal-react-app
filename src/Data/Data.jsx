const getData = async () =>
  fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
  ).then(response => response.json());

export const Data = async () => await getData();
