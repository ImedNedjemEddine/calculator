import React,{useState,useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from "styled-components/native";
import { Body , Title , Shape , Button ,ResultPlace ,Result, NightMoode , DarkSwitch } from '../components/calculator.styles';
export const CalculatorScreen = () =>{
  const {light, dark} = useContext(ThemeContext);
  const [operation, setOperation] = useState('')
  const valuesAndOperators = ['.','0','=','+','1','2','3','-','4','5','6','*','7','8','9','/']
  const [color , setColor] = useState(light)
  const onClick = (num) =>{
    if(num !== '='){
    setOperation(operation+num )
    }else{
      setOperation(eval(operation).toString())
    }
  }
  return(

    <Body style={{backgroundColor:color.background}}>
    {valuesAndOperators.map((x)=><TouchableOpacity key={x} onPress={()=>onClick(x)}><Shape style={{backgroundColor:color.button}}><Title style={{color:color.font}}>{x}</Title></Shape></TouchableOpacity>)}
    <TouchableOpacity  onPress={()=>setOperation('')}>
        <Button style={{backgroundColor:color.button}}>
            <Title style={{color:color.font}}>C</Title>
        </Button>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setOperation(operation.substring(0,operation.length-1))}>
        <Button style={{backgroundColor:color.button}}>
            <Title style={{color:color.font}}>{"<"}</Title>
        </Button>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setOperation((-1*Number(operation)).toString())}>
        <Button style={{backgroundColor:color.button}}>
            <Title style={{color:color.font}}>{"+/-"}</Title>
        </Button >
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setOperation(operation+'%')}>
        <Button style={{backgroundColor:color.button}}>
            <Title style={{color:color.font}}>%</Title>
        </Button>
    </TouchableOpacity>
    <ResultPlace style={{borderColor:"transparent",backgroundColor:color.display}}>
        <Result style={{color:color.font}}>
            {operation}
        </Result>
    </ResultPlace>
    <DarkSwitch value={color === light} onValueChange={()=>setColor(color===light ? dark : light)}></DarkSwitch>
    </Body>
  )
}
