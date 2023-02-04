import React,{useState,useEffect} from "react";
import CreateBoard from '../utils/CreateBoard';
import Cell from "./Cell";
import { revealed } from "../utils/Reveal";
import Dropdown from 'react-bootstrap/Dropdown';
import { click } from "@testing-library/user-event/dist/click";
import Timer from "./Timer";


function Board() {
    const [grid,setGrid]=useState([]);
    const [nonMinecount,setNonMinecount]=useState(0);
    const [mineLocation,setmineLocation]=useState([]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    // const [freshboard, setFreshboard] = useState(() => {
    //     const freshBoard = (num1, num2, num3) => {
    //         const newBoard=CreateBoard(num1,num2,num3);
    //         setNonMinecount(num1*num2-num3);
    //         setmineLocation(newBoard.mineLocation);
    //         setGrid(newBoard.board);
    //     }
    //     freshBoard(10, 10, 20)
    // })
    const style={
            display : 'flex',
            flexDirection : 'row',
            width:'fit-content',
            color:'white',
            
        }
        

    useEffect(()=>{
        return freshBoard(10, 10, 20);
    },[]);

    let clickedOption = []

    const freshBoard = (num1, num2, num3) => {
        const newBoard=CreateBoard(num1,num2,num3);
        setNonMinecount(num1*num2-num3);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    
    
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }
    //revealing all cells and the minelocation with all mines when clicked on mines
    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            alert("you clicked mine")
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
        }
        
    }
    
    return (
        <div className="parent">
            <div style={{color:"white",textAlign:"center",fontSize:"35px"}}>Non-Mines : {nonMinecount}</div>
            <div>
                {/* <Timer /> */}
               <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Difficulties
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            freshBoard(4, 4, 8)
                        }}>Board of 4</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            freshBoard(8, 8, 16)
                        }}>Board of 8</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            freshBoard(10, 10, 20)
                        }}>Board of 10</Dropdown.Item>
                        {/* <Dropdown.Item onClick={setValues([8, 8, 16])}>Board of 8</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown> 
                {grid.map((singlerow,index1)=>{
                    return (
                            <div style={style} key={index1}>
                                {singlerow.map((singlecol,index2)=>{
                                return  <Cell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                                })}
                            </div>
                    )
                })}
            </div>
          
        </div>
    ) 
    
}
export default Board;
