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
              <label>Part title: </label>
              <DataInput type="text" placeholder="part title" />
            </InputDiv>

            <InputDiv>
              <label>Part id: </label>
              <DataInput type="text" placeholder="part id" />
            </InputDiv>
            <InputDiv>
              <label>Rating:</label>
              <DataInput type="number" placeholder="Average Rating" />
              <DataInput type="number" placeholder="Number of Ratings" />
              <DataInput type="number" placeholder="Answered Questions" />
            </InputDiv>
            <InputDiv>
              <label>Description: </label>
              <DataInput type="text" placeholder="summary description" />
            </InputDiv>
            <InputDiv>
              <label>Images: </label>
              <DataInput type="file" id="file" />
            </InputDiv>
            <InputDiv>
              <label>Categories: </label>
              <DataInput
                type="text"
                placeholder="Categories, put spaces between entries."
              />
            </InputDiv>
            <InputDiv>
              <label>Family: </label>
              <DataInput type="text" placeholder="product family" />
            </InputDiv>
            <InputDiv>
              <label>Options: </label>
              <DataInput type="text" placeholder="Option" />
            </InputDiv>
            <InputDiv>
              <label>Base Price: </label>
              <DataInput type="text" placeholder="base price" />
            </InputDiv>
            <InputDiv>
              <label>Features: </label>
              <DataInput type="text" placeholder="product features" />
            </InputDiv>
            <InputDiv>
              <label>Specifications: </label>
              <DataInput type="text" placeholder="product specifications" />
            </InputDiv>
            <InputDiv>
              <label>In Stock: </label>
              <DataInput type="text" placeholder="true / false" />
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
            <button style={{ width: "100%", padding: "10px" }}>Create</button>
          </div>
        </ComponentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default CreateProductPage;
