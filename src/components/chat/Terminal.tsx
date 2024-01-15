/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState, MouseEvent } from 'react'
import ReactDOM from 'react-dom';

import Terminal, { ColorMode, TerminalOutput, TerminalInput } from 'react-terminal-ui';

export const TerminalController = (props = {}) => {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>,

  ]);

  function toggleColorMode (e: MouseEvent) {
    e.preventDefault();
    setColorMode(colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light);
  }

  function onInput (input: string) {
      let ld = [...lineData];
      ld.push(<TerminalInput>{input}</TerminalInput>);
    if (input.toLocaleLowerCase().trim() === 'view-source') {
      window.open('https://github.com/jonmbake/react-terminal-ui', '_blank');
    } else if (input.toLocaleLowerCase().trim() === 'view-react-docs') {
      window.open('https://reactjs.org/docs/getting-started.html', '_blank');
    } else if (input.toLocaleLowerCase().trim() === 'clear') {
      ld = [];
    } else if (input) {
      ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
    }
    setLineData(ld);
  }

  const redBtnClick = () => {
    console.log("Clicked the red button.");
  }

  const yellowBtnClick = () => {
    console.log("Clicked the yellow button.");
  }

  const greenBtnClick = () => {
    console.log("Clicked the green button.");
  }

  const btnClasses = ['btn'];
  if (colorMode === ColorMode.Light) {
    btnClasses.push('btn-dark');
  } else {
    btnClasses.push('btn-light');
  }
  return (

      <Terminal
        name='React Terminal UI'
        colorMode={ colorMode }
        onInput={ onInput }
        redBtnCallback={ redBtnClick }
        yellowBtnCallback={ yellowBtnClick }
        greenBtnCallback={ greenBtnClick }
      >
        {lineData}
      </Terminal>

  )
};

