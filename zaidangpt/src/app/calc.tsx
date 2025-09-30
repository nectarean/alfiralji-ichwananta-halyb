'use client';

import React, { useState } from 'react';

const buttonLayout = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const operatorMap: Record<string, string> = {
  '÷': '/',
  '×': '*',
  '−': '-',
  '+': '+',
};

function formatResult(result: string) {
  if (result.length > 12) {
    return parseFloat(result).toExponential(6);
  }
  return result;
}

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState<number | null>(null);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setOperator(null);
    setValue(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(
      display.charAt(0) === '-' ? display.slice(1) : '-' + display
    );
  };

  const inputPercent = () => {
    const currentValue = parseFloat(display);
    if (!isNaN(currentValue)) {
      setDisplay((currentValue / 100).toString());
    }
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value;
      let newValue = currentValue;

      switch (operator) {
        case '+':
          newValue += inputValue;
          break;
        case '-':
          newValue -= inputValue;
          break;
        case '*':
          newValue *= inputValue;
          break;
        case '/':
          newValue = inputValue === 0 ? NaN : currentValue / inputValue;
          break;
      }

      setValue(newValue);
      setDisplay(formatResult(String(newValue)));
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleButtonClick = (btn: string) => {
    if (/\d/.test(btn)) {
      inputDigit(btn);
    } else if (btn === '.') {
      inputDot();
    } else if (btn === 'AC') {
      clearAll();
    } else if (btn === '±') {
      toggleSign();
    } else if (btn === '%') {
      inputPercent();
    } else if (btn === '=') {
      if (operator) {
        performOperation(operator);
        setOperator(null);
        setValue(null);
        setWaitingForOperand(true);
      }
    } else if (operatorMap[btn]) {
      performOperation(operatorMap[btn]);
    }
  };

  // Google Calculator color palette
  const colors = {
    background: '#f5f5f5',
    display: '#222',
    displayText: '#fff',
    button: '#fff',
    buttonText: '#222',
    operator: '#f8cb2e',
    operatorText: '#222',
    equals: '#4285f4',
    equalsText: '#fff',
    function: '#e0e1e6',
    functionText: '#222',
    accent: '#f44336',
  };

  return (
    <div style={{
      maxWidth: 340,
      margin: '48px auto',
      background: colors.background,
      borderRadius: 24,
      boxShadow: '0 8px 32px #0002',
      padding: 24,
      fontFamily: 'Roboto, Arial, sans-serif',
      border: '1px solid #e0e0e0',
    }}>
      <div style={{
        background: colors.display,
        color: colors.displayText,
        fontSize: 48,
        fontWeight: 500,
        textAlign: 'right',
        padding: '32px 16px 24px 16px',
        borderRadius: 16,
        marginBottom: 24,
        minHeight: 72,
        letterSpacing: 1,
        boxShadow: '0 2px 8px #0001',
        overflowX: 'auto',
      }}>
        {display}
      </div>
      <div>
        {buttonLayout.map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: 'flex', marginBottom: 12 }}>
            {row.map((btn, colIdx) => {
              // Button color logic
              let bg = colors.button;
              let color = colors.buttonText;
              let fontWeight = 400;
              if (btn === '=') {
                bg = colors.equals;
                color = colors.equalsText;
                fontWeight = 600;
              } else if (['÷', '×', '−', '+'].includes(btn)) {
                bg = colors.operator;
                color = colors.operatorText;
                fontWeight = 600;
              } else if (btn === 'AC') {
                bg = colors.accent;
                color = '#fff';
                fontWeight = 600;
              } else if (['±', '%'].includes(btn)) {
                bg = colors.function;
                color = colors.functionText;
              }
              return (
                <button
                  key={btn}
                  onClick={() => handleButtonClick(btn)}
                  style={{
                    flex: btn === '0' ? 2 : 1,
                    margin: '0 6px',
                    height: 56,
                    fontSize: 24,
                    fontWeight,
                    border: 'none',
                    borderRadius: 28,
                    background: bg,
                    color,
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: '0 1px 2px #0001',
                    transition: 'background 0.1s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: btn === '0' ? 112 : 56,
                  }}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
        body {
          background: #f5f5f5;
        }
      `}</style>
    </div>
  );
}