import React,{useState,useEffect} from 'react';
import {View,Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';
const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
const Body = styled.View`
  background-color:black;
  flex:1;
  justify-content:center;
  align-items:center;
`
const Title = styled.Text`
  color:white;
  font-size:40px;
`
const Shape = styled.View`
  background-color:green;
  height:${windowHeight*0.15}px;
  width:${windowWidth*0.3}px;
`
export default function App(){
  console.log("changed")
  console.log(windowHeight)
  return(
    <Body>
      <Title>
        width : {Math.floor(windowWidth)}
      </Title>
      <Title>
        height : {Math.floor(windowHeight)}
      </Title>
    <Shape></Shape>
    </Body>
  )
}