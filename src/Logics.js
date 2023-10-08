import React, { useState } from "react";

function Logics(Props) {
    let displayAlert = ({ msg: msg, type: type },{ msgError: msgError, typeError: typeError }) => {
        if (text) {
            Props.showAlert(msg,type)
        }
        else
            Props.showAlert(msgError,typeError)
    }
    const [text, setText] = useState("");
    let copyText = async () => {
        try {
            if (text) {
                await navigator.clipboard.writeText(text).then(() => {
                    Props.showAlert("Text copied to clipboard", "success")
                })
            }
            else throw new Error("not done")
        }
        catch {
            Props.showAlert("Nothing to copy", "warning")
        }


    }
    let clearText = () => {
        setText('')
        // displayAlert(successAlert = { msg: "text clear", type: "success" },errorAlert={msgError:"empty string",typeError:"warning"})
        displayAlert({ "msg": "text clear", "type": "success" },{"msgError":"empty string","typeError":"warning"})
    }
    let toup = () => {
        // let upr=text.toUpperCase();
        if (text) {
            setText(text.toUpperCase());
            Props.showAlert("Text converted to upper case", "success")
        }
        else
            Props.showAlert("empty string", "warning")
    };
    let tolow = () => {
        // let upr=text.toUpperCase();
        if (text) {
            setText(text.toLowerCase());
            Props.showAlert("Text converted to Lower case", "success")
        }
        else
            Props.showAlert("empty string", "warning")
    };
    let countlen = (event) => {
        setText(event.target.value);
    };
    // let regex = /[a-zA-Z0-9]/g;
    const regex = /\s/g;
    return (
        <div className="container">
            <div className="mb-3 my-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Enter Text
                </label>
                <textarea
                    className="form-control"
                    style={{ backgroundColor: Props.mode === 'dark' ? 'grey' : 'white' }}
                    id="exampleFormControlTextarea1"
                    onChange={countlen}
                    value={text}
                    rows="8"
                ></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={toup}>
                Uppercase
            </button>
            <button type="button" className="btn btn-primary mx-3 my-2" onClick={tolow}>
                Lowercase
            </button>
            <button type="button" className="btn btn-primary mx-0 my-2" onClick={copyText}>
                Copy Text
            </button>
            <button type="button" className="btn btn-primary mx-4 my-2" onClick={clearText}>
                Clear Text
            </button>
            <p className="my-3">Total no of Characters: {text.replace(regex, '').length}</p>
            <p className="my-3">Total words: {text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
            <h4>Preview</h4>
            <p >{text}</p>
        </div>
    );
}
export default Logics;
