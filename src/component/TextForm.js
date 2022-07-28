import React,{useState} from 'react'

export default function TextForm(props) {
   
    const handUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)

    }
    const handalonchange =(event)=>{
        setText(event.target.value)

    }
    const handupclear =(event)=>{
      setText('')
    }
    
    const [text,setText]=useState("");
   

    const handcopy=()=>{
        var text=document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

    }
    const hadleExtraspaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    return (
        <>
            <div className={`container text-${props.mode==='dark'?'white':'black'}`}>
                <div className="form-group my-3">
                    <label htmlFor="exampleFormControlTextarea1"><h1>Enter the text analy</h1></label>
                    <textarea className="form-control " onChange={handalonchange} value={text} id="exampleFormControlTextarea1" 
                    style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}rows="6"></textarea>
                </div>
                <button disabled={text.length===0} type="submit" onClick={handUpClick} className="btn btn-primary mb-2 ,mx-1" >Convert to uppercase</button>
                <button disabled={text.length===0} type="submit" onClick={handloClick} className="btn btn-primary mb-2 mx-3">Convert to lowercase</button>
                <button disabled={text.length===0} type="submit" onClick={handupclear} className="btn btn-primary mb-2 mx-2">Clear Text</button>
                <button disabled={text.length===0} type="submit" onClick={handcopy} className="btn btn-primary mb-2 mx-2">Copy Text</button>
                <button disabled={text.length===0} type="submit" onClick={hadleExtraspaces} className="btn btn-primary mb-2 mx-2">Remove Extra Space</button>
            </div>
            <div className={`container text-${props.mode==='dark'?'white':'black'}`}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(' ').filter((a)=>{return a}).length} Words and {text.length} charactears</b></p>
                <p> <b>{0.008 * text.split(' ').filter((a)=>{return a}).length} Minutes to read</b></p>
                <h3 className='my-3'>Preview</h3>
                <p>{text.length>0?text:"Enter something to Preview"}</p>
            </div>

        </>
    )
}
