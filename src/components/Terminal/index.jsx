import React from "react";
import Termynal from "./termynal.min.js";
import "./Terminal.css";
/**
 * A wrapper for data-termynal
 * 
 * @author Ian Fabs
 * @class
 * @classdesc A React Component wrapper around Termynal
 * @param {*[]} props - The props of the component
 */
class Terminal extends React.Component {
    constructor(props) {
        super(props);
        let number = Math.ceil(Math.random() * 10);
        this.state = {
            id: "t"+number,
        };
    }

    componentDidMount() {
        this.term = new Termynal("#"+this.state.id);
    }

    render() {
        return (
            <div id={this.state.id} data-termynal>
                {this.props.children}
            </div>
        )
    }
}
/**
 * This is the componentization of the data-ty
 * 
 * @param {Object} props - The components props
 * @param {String||Undefined} props.type - The data-ty of the span
 * @param {String} props.content - The content of the span
 * @param {*[]} props.children - The components children
 * @return {React.Component}
 */
function Ty({type,prompt,typeDelay,content,children}){
    return (
        <span 
            data-ty={type===(null||undefined)?false:type}
            data-ty-prompt={prompt===(null||undefined)&&type===(null||undefined||"")?"$":prompt}
        >
            {children || content}
        </span>
    );
}

export {Terminal, Ty};