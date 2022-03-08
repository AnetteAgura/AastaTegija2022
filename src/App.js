import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';


function App() {
    const  [data, setData] = useState([]);

    let ndl = "2022-03-07"
    let grp = 1433
    const url = `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${grp}&nadal=${ndl}`

    useEffect(() => {
      fetch(url).then((response) => {return response.json()})
      .then((data) => 
      {
        console.log(data)
        setData(data);
      });

         //console.log(data.ajad[1])
        //console.log(data.tunnid['2022-03-07'][0].aine)
        
      },  []);

    return(
      <div>  
    
      <table >
                        <tbody>
                        <tr>
                            <th>Esmaspäev</th>
                            <th>Teisipäev</th>
                            <th>Kolmapäev</th>
                            <th>Neljapäev</th>
                            <th>Reede</th>
                        </tr>

                        <tr>
                            <td>{data.ajad[1]}</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <td>Tomorrow</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Day 3</td>
                            <td>22</td>
                            <td>22</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Day 4</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Day 5</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                        </tr>
                        </tbody>
                    </table>

    

    </div>
    )
   

   
}



export default App();


 



