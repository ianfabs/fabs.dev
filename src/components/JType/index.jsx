import React from "react";

/* function JType(props) {
  var inc = 0;
  var ninc = 0;
  var alphabet = " ,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0";
  var alph = alphabet.split(","); 
  let str = alph[inc];
  var full = [];
  let display = "";
  function writeText(name, fps,caps,func=()=>{}) {  
      setTimeout(
      ()=>{ 
        full[ninc] = (caps)? alph[inc].toUpperCase() : alph[inc];
        display = full.reduce(function(a,b){return a+b})
        inc++;
          if(alph[inc-1] === name.charAt(ninc).toLowerCase())
          {
            ninc++;
            inc=0;
          }
        if(ninc < name.length)
        writeText(name, fps, caps, func);
        else
        func();
      }, 
      fps);
  }

  writeText("9Jason Aguiar",40, false,()=>{ alert("done")})
} */

class Speller extends React.Component {
  constructor(props) {
    super(props);

    this.alphabet = " ,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0";

    this.state = {
      display: '',
      inc: 0,
      ninc: 0,
      alph: this.alphabet.split(","),
      full: [],
    };
  }
  componentDidMount() {
    this.writeText((this.props.name || this.props.children), this.props.fps, this.props.caps, this.props.done);
  }
  render() {
    return (
      <span>
        {this.state.display}
      </span>
    );
  }
  writeText(name, fps, caps, done=()=>{}) {  
    setTimeout(
    ()=>{ 
      this.state.full[this.state.ninc] = caps ? this.state.alph[this.state.inc].toUpperCase() : this.state.alph[this.state.inc];
      // set display to be as much of the word as possible
      this.setState({ display: this.state.full.reduce(function(a,b){return a+b})} );
      //inc++;
      this.setState({inc: this.state.inc+1});
      if(this.state.alph[this.state.inc-1] === name.charAt(this.state.ninc).toLowerCase()){
          this.setState({ninc: this.state.ninc+1});
          this.setState({inc: 0});
      }
      if(this.state.ninc < name.length) {
        this.writeText(name, fps, caps, done);
        console.log(this.state);
      }else {/* done(); */}
    }, fps);
  }
}

export default Speller;