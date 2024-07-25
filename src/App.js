import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import SearchResult from './Components/SearchResult/SearchResult';

export    const BASE_URL = "http://localhost:9000"

function App() {

const [data,setData]=useState(null)
const [filteredData,setFilteredData]=useState(null);
const [loading,setLoading]=useState(false)
const [error,setError]=useState(null)
const [selectedBtn,setSelectedBtn]= useState("all");

// fetchFoodData();
useEffect(()=>{
  const fetchFoodData = async()=>{
    setLoading(true)
      try{
    
     const response = await fetch (BASE_URL);
        const json =await response.json();
        setData(json)
        setFilteredData(json)
        setLoading(false);
      }
      catch(error){
        setError("Unable to fetch data");
      }
    }
    fetchFoodData();
},[])

const searchFood = (e)=>{
  const searchValue =  e.target.value;

  if(searchValue===""){
    setFilteredData(null)
  }
  const filter= data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
  setFilteredData(filter)
}
const filterFood = (type)=>{
  if(type==="all"){
    setFilteredData(data)
setSelectedBtn("all")
return;
  }
  const filter= data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))

setFilteredData(filter)
setSelectedBtn(type)
}
if (error) return <div>{error}</div>
if(loading) return <div>loading....</div>
  return (
    <>
  <Container>
    <TopContainer>
<div className="logo">

<img src="logo-circle.png" alt="" height={120} width={120} />
</div>
<div className="search">
  <input type="text"onChange={searchFood} placeholder="Search Food" />
</div>
    </TopContainer>
    <FilterContainer>
<Button  onClick={()=>filterFood("all")}>All</Button>
<Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
<Button onClick={()=>filterFood("lunch")}>Lunch</Button>
<Button onClick={()=>filterFood("dinner")}>Dinner</Button>
    </FilterContainer>


  </Container>
    <SearchResult data={filteredData}/>
    </>
  );
}

export default App;

export const Container = styled.div`

`;
const TopContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 20px;
background-color: black;



.search{
  input{
    background-color: transparent;
    border: 1px solid red;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  padding: 0px 10px ;
  }

}

@media(0 <width<600px){
  flex-direction: column;
  height: 180px;
}

`
const FilterContainer = styled.section`
display: flex;
gap: 12px;
justify-content: center;
color: white;
margin-bottom: 20px;
`;
 export const Button = styled.button`
background-color: #f22f2f;
border-radius: 5px;
border: none;
cursor: pointer;
padding: 6px 12px;

&:hover{
  background-color: red;
}

`;
