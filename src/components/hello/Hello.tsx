import React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onDoubleIncrement?: () => void;
  onDoubleDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement, onDoubleDecrement, onDoubleIncrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('Be more enthusiastic!');
  }

  return (
    <div className="hello">
      <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
      <div>
        <button onClick={onDoubleDecrement}>--</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDoubleIncrement}>++</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join('!');
};
