import {View,Icon,Text,Switch, Dimensions,TouchableOpacity} from 'react-native';
import styled,{ThemeContext} from "styled-components/native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Body = styled.View`
  background-color:black;
  flex:1;
  flex-wrap: wrap-reverse;
  flex-direction:row;
  justify-content:center;
`
export const Title = styled.Text`
  color:white;
  font-size:40px;
`
export const Shape = styled.View`
  background-color:green;
  height:${windowHeight*0.10}px;
  width:${windowWidth*0.17}px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  margin:7px;
`
export const Button = styled.View`
  background-color:green;
  height:${windowHeight*0.10}px;
  width:${windowWidth*0.17}px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  margin:7px;
`
export const ResultPlace = styled.View`
  height:${windowHeight*0.25}px;
  width:${windowWidth*0.83}px;
  flex:1;
  background-color:${(props)=>props.theme.light.display};
  border-radius:${windowWidth*0.08}px;
  border-width:1px;
  margin:30px;
  padding:10px;
  position:absolute;
  top:80px;
  align-items:center;
  justify-content:center;
  
`;
export const Result = styled.Text`
  color:green;
  font-size:40px;
`

export const NightMoode = styled.TouchableOpacity`
  height:20px;
  width:20px;
  border-radius:10px;
  background-color:red;
  border-color:red;
  position:absolute;
  top:30px;
`
export const DarkSwitch = styled.Switch`
  position:absolute;
  top:20px;
  right:10px;

`