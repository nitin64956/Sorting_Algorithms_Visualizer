import React from 'react';
import {getMergeSortAnimations} from '../Algorithms/SortingAlgorithms/MergeSort';
import {getQuickSortAnimations} from '../Algorithms/SortingAlgorithms/QuickSort';
import {getBubbleSortAnimations} from '../Algorithms/SortingAlgorithms/BubbleSort';
import {getInsertionSortAnimations} from '../Algorithms/SortingAlgorithms/InsertionSort';
import {getSelectionSortAnimations} from '../Algorithms/SortingAlgorithms/SelectionSort';
import {getCycleSortAnimations} from '../Algorithms/SortingAlgorithms/CycleSort';


import './SortingVisualizer.css';
import AuxComp from '../hoc/AuxComp';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 225;
const PRIMARY_COLOR = 'white';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    document.getElementsByClassName('algbutton').disabled = true
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 400));
    }
    this.setState({array:array});

  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      
      const isColorChange = i % 4 === 0 || i % 4 === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  cycleSort() {

    const animations = getCycleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      
      const isColorChange = i % 3 !== 1;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort () {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      
      const isColorChange = i % 3 === 0 || i % 3 === 2;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      if (isColorChange) {

        const barOneIdx = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      
      const isColorChange = i % 4 === 0 || i % 4 === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort () {
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      
      const isColorChange = i % 4 === 0 || i % 4 === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

    
  render() {
    const {array} = this.state;

    return (

      <AuxComp>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        
        <button className = "genarray"   onClick={() => this.resetArray()}>Generate New Array</button>
        <button className = "algbutton"  onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className = "algbutton"  onClick={() => this.quickSort()}>Quick Sort</button>
        <button className = "algbutton"  onClick={() => this.cycleSort()}>Cycle Sort</button>
        <button className = "algbutton"  onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button className = "algbutton"  onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button className = "algbutton"  onClick={() => this.selectionSort()}>Selection Sort</button>
        
        </div>

        
        </AuxComp>
      
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}