import React, { useState } from "react";
import {
  ComponentContainer,
  ContentContainer,
  MainContainer,
  MainTitle,
  SubTitle,
} from "../../../tools/globalStyles";
import { DataInput, InputDiv } from "./styles";

const CreateProductPage = () => {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs(prev=> {
      return {...prev, [e.target.name]:e.target.value}
    })
  }
  const handleCat = (e) => {
    setCat(e.target.value.split(" "));
  }

  const handleClick = (e)=> {

  }

  return (
    <MainContainer>
      <MainTitle>Create a Product</MainTitle>
      <ContentContainer>
        <ComponentContainer
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        > 
          <SubTitle>Please fill out the following information:</SubTitle>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <InputDiv>
              <label>Product title: </label>
              <DataInput type="text" placeholder="part title" onChange={handleChange} name="title"/>
            </InputDiv>

            <InputDiv>
              <label>Product id: </label>
              <DataInput type="text" placeholder="part id" onChange={handleChange} name="partId"/>
            </InputDiv>
            <InputDiv>
              <label>Rating:</label>
              <DataInput type="number" placeholder="Average Rating" onChange={handleChange} name="totalAvgRating"/>
              <DataInput type="number" placeholder="Number of Ratings" onChange={handleChange} name="totalNumRatings"/>
              <DataInput type="number" placeholder="Answered Questions" onChange={handleChange} name="totalAnsweredQuestions"/>
            </InputDiv>
            <InputDiv>
              <label>Description: </label>
              <DataInput type="text" placeholder="summary description" onChange={handleChange} name="desc"/>
            </InputDiv>
            <InputDiv>
              <label>Images: </label>
              <DataInput type="file" id="file" onChange={e=>setFile(e.target.files)[0]} name="imgs"/>
            </InputDiv>
            <InputDiv>
              <label>Categories: </label>
              <DataInput
                type="text"
                placeholder="Categories, put spaces between entries."
                onChange={handleCat}
                name="categories"
              />
            </InputDiv>
            <InputDiv>
              <label>Family: </label>
              <DataInput type="text" placeholder="product family" onChange={handleChange} name="family"/>
            </InputDiv>
            <InputDiv>
              <label>Options: </label>
              <DataInput type="text" placeholder="Option" onChange={handleChange} name="options"/>
            </InputDiv>
            <InputDiv>
              <label>Base Price: </label>
              <DataInput type="number" placeholder="base price" onChange={handleChange} name="basePrice"/>
            </InputDiv>
            <InputDiv>
              <label>Features: </label>
              <DataInput type="text" placeholder="product features" onChange={handleChange} name="features"/>
            </InputDiv>
            <InputDiv>
              <label>Specifications: </label>
              <DataInput type="text" placeholder="product specifications" onChange={handleChange} name="specs"/>
            </InputDiv>
            <InputDiv>
              <label>In Stock: </label>
              <DataInput type="text" placeholder="true / false" onChange={handleChange} name="inStock"/>
            </InputDiv>
            <div style={{height: "60px"}}/>
          </form>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              display: "flex",
              width: "calc(100% - 40px)",
            }}
          >
            <button style={{ width: "100%", padding: "10px" }} onClick={handleClick}>Create</button>
          </div>
        </ComponentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default CreateProductPage;
