import React,{Component} from 'react';
import './VisualizationWindow.css';

import SortingVisualizer from './SortingVisualizer';


export default class VisualizationWindow extends Component {
    
    render() {

    return (
        <div className = "container">
            <div className="tablink" >
                Sorting Algorithms 
                <div className = "icon">
                <i className="fa fa-bar-chart" />  
                </div> 
            </div>
            <SortingVisualizer/>
        </div>
    
    );
        }  
};