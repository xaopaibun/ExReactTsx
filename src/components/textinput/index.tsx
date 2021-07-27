interface PropsInputApp {
   name: any, 
   onchangeText : any,
   value : any,
   placeholder : any
}

const TextInput: React.FC<PropsInputApp> = ({name ,onchangeText , value, placeholder}) =>{
    return(
        <div className="form-group">
            <input type="text"
          className="form-control" name={name}  onChange = {() => onchangeText()} value = {value} aria-describedby="helpId" placeholder={placeholder} /> 
      </div>
    );
}
export default TextInput;