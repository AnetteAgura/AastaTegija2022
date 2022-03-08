import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

export default function  App() {
  let ndl = "2022-03-07"
  let grp = 1433
  const url = `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${grp}&nadal=${ndl}`

  console.log(url);



  fetch(url, {
    method: "GET"
  })


  .then(response => {
      if (!response.ok) {
          throw new Error(response.statusText)
      }
      return response.json();
  })
  .then(data => {
      console.log(data)
  })
  .catch(console.error)


  return (
    <div className="App">
      <Header />
    </div>
  );
}

App();
