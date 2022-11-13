const myHeaders = new Headers();
myHeaders.append('apikey', 'ftoH81pYqUKpjIHKtuAcxm25HOuCW7ta');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export default function changeCurrent({ amountValue, toValue, fromValue }) {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${toValue}&from=${fromValue}&amount=${amountValue}`,
    requestOptions
  ).then(response => response.json());
}
