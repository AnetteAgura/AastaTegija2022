import './App.css';
import {useState, useEffect} from "react";


function getMondayOfCurrentWeek() {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const monday = new Date(today.setDate(first));
    return monday;
}


function App() {

    const [data, setData] = useState([]);

    let week = '2022-03-07';
    let grp = '1433';
    const url = `https://siseveeb.voco.ee/veebilehe_andmed/tunniplaan?grupp=${grp}&nadal=${week}`;
    let currentWeek = getMondayOfCurrentWeek();
    let error;
    console.log(currentWeek)
    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
        })
            .then((data) => {
                console.log(data)
                setData(data);
            });
    }, []);
    console.log(data);

  
    try{

        return (
            <div className="App">
                {data ? (
                    <div>
                    
                        <table>
                            <tbody >
                            <tr >
                                <th>Tunniajad UwU</th>
                                <th>Esmaspäev</th>
                                <th>Teisipäev</th>
                                <th>Kolmapäev</th>
                                <th>Neljapäev</th>
                                <th>Reede</th>
                            </tr>



                             {/* Nädala esimesed tunnid*/}
                            <tr>

                                {/* esimese tunni kellaaeg */}
                                <td>{data.ajad[2]}</td>


                                 {/* Esmaspäeva esimene tund */}
                                <td>{data.tunnid['2022-03-07'][0].aine} <br></br>
                                    {data.tunnid['2022-03-07'][0].opetaja}<br></br>
                                    {data.tunnid['2022-03-07'][0].ruum}
                                </td>

                                 {/* Teisipäeva esimene tund */}
                                <td>{data.tunnid['2022-03-08'][0].aine} <br></br>
                                    {data.tunnid['2022-03-08'][0].opetaja}<br></br>
                                    {data.tunnid['2022-03-08'][0].ruum}
                                </td>

                                 {/* Kolmapäeva esimene tund */}
                                <td>{data.tunnid['2022-03-09'][0].aine} <br></br>
                                    {data.tunnid['2022-03-09'][0].opetaja}<br></br>
                                    {data.tunnid['2022-03-09'][0].ruum}
                                </td>

                                 {/* Neljapäeva esimene tund */}
                                <td>{data.tunnid['2022-03-10'][0].aine} <br></br>
                                    {data.tunnid['2022-03-10'][0].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][0].ruum}
                                </td>

                                 {/* Reede esimene tund */}
                                <td>
                                    {data.tunnid['2022-03-11'][0].aine} <br></br>
                                    {data.tunnid['2022-03-11'][0].opetaja}<br></br>
                                    {data.tunnid['2022-03-11'][0].ruum}
                                </td>

                            </tr>

                            

                             {/* Nädala Teised tunnid*/}
                            <tr>
                                {/* Teise tunni kellaaeg */}
                                <td>{data.ajad[3]}</td>

                                 {/* Esmaspäeva teine  tund */}
                                <td>{data.tunnid['2022-03-07'][1].aine} <br></br>
                                    {data.tunnid['2022-03-07'][1].opetaja}<br></br>
                                    {data.tunnid['2022-03-07'][1].ruum}</td>

                                {/* Teisipäeva teine  tund */}
                                <td>{data.tunnid['2022-03-08'][1].aine} <br></br>
                                    {data.tunnid['2022-03-08'][1].opetaja}<br></br>
                                    {data.tunnid['2022-03-08'][1].ruum}</td>

                                {/* Kolmapäeva teine  tund */}
                                <td>{data.tunnid['2022-03-09'][1].aine} <br></br>
                                    {data.tunnid['2022-03-09'][1].opetaja}<br></br>
                                    {data.tunnid['2022-03-09'][1].ruum}</td>

                                {/* Neljapäeva  teine  tund */}
                                <td>{data.tunnid['2022-03-10'][1].aine} <br></br>
                                    {data.tunnid['2022-03-10'][1].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][1].ruum}</td>
                                {/* Reede teine  tund */}
                                <td>{data.tunnid['2022-03-11'][1].aine} <br></br>
                                    {data.tunnid['2022-03-11'][1].opetaja}<br></br>
                                    {data.tunnid['2022-03-11'][1].ruum}</td>
                            </tr>


                            {/* Nädala Kolmandad tunnid*/}
                            <tr>
                            {/* Kolmanda tunni kellaaeg */}
                                <td>{data.ajad[4]}</td>

                                {/* Esmaspäeva Kolmas tund*/}    
                                <td>{data.tunnid['2022-03-07'][2].aine} <br></br>
                                    {data.tunnid['2022-03-07'][2].opetaja}<br></br>
                                    {data.tunnid['2022-03-07'][2].ruum}
                                </td>

                                 {/* Teisipäeva Kolmas tund*/}  
                                <td>{data.tunnid['2022-03-08'][2].aine} <br></br>
                                    {data.tunnid['2022-03-08'][2].opetaja}<br></br>
                                    {data.tunnid['2022-03-08'][2].ruum}
                                </td>

                                    
                                 {/* Kolmapäeva Kolmas tund*/}  
                                <td>{data.tunnid['2022-03-09'][2].aine} <br></br>
                                    {data.tunnid['2022-03-09'][2].opetaja}<br></br>
                                    {data.tunnid['2022-03-09'][2].ruum}
                                </td>

                                {/* Neljapäeva Kolmas tund*/}
                                <td>{data.tunnid['2022-03-10'][2].aine} <br></br>
                                    {data.tunnid['2022-03-10'][2].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][2].ruum}
                                </td>

                                {/* Reede Kolmas tund*/}
                                <td>{data.tunnid['2022-03-11'][2].aine} <br></br>
                                    {data.tunnid['2022-03-11'][2].opetaja}<br></br>
                                    {data.tunnid['2022-03-11'][2].ruum}
                                </td>
                            </tr>

                            <tr>
                            {/* Neljanda tunni ajad */}
                                <td>{data.ajad[5]}</td>

                                {/* Esmaspäeva Neljas Tund*/}
                                <td>{data.tunnid['2022-03-07'][3].aine} <br></br>
                                    {data.tunnid['2022-03-07'][3].opetaja}<br></br>
                                    {data.tunnid['2022-03-07'][3].ruum}
                          
                                </td>
                                 {/* Teisipäeva Neljas Tund*/}
                                <td>{data.tunnid['2022-03-08'][3].aine} <br></br>
                                    {data.tunnid['2022-03-08'][3].opetaja}<br></br>
                                    {data.tunnid['2022-03-08'][3].ruum}
                          
                                </td>

                                {/* Kolmapäeva  Neljas Tund*/}
                                <td>{data.tunnid['2022-03-10'][3].aine} <br></br>
                                    {data.tunnid['2022-03-10'][3].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][3].ruum}
                          
                                </td>

                                 {/* Neljapäev  Neljas Tund*/}
                                <td>{data.tunnid['2022-03-10'][3].aine} <br></br>
                                    {data.tunnid['2022-03-10'][3].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][3].ruum}
                          
                                </td>

                                  {/* Reede  Neljas Tund
                                  Hetkel Reedel tundi ei ole*/}
                               

            


                            </tr>

                            <tr>
                            {/* Neljanda tunni ajad */}
                                <td>{data.ajad[6]}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* Kolmapäeva  Neljas Tund*/}
                                <td>{data.tunnid['2022-03-10'][3].aine} <br></br>
                                    {data.tunnid['2022-03-10'][3].opetaja}<br></br>
                                    {data.tunnid['2022-03-10'][3].ruum}
                          
                                </td>

                               

                                 
                               

            


                            </tr>

                            </tbody>
                        </table>
                    </div>
                ) : (<p>Empty array</p>)}
    
            </div>
        
        );} catch (error) {
            error = error;
            console.log(error)
    }
    if (error===error){
        return(
            <div className="App">
                <h1>There was a problem with fetching data from API</h1>
            </div>
        )
    }





   
}

export default App;







