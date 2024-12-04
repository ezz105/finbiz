
type ButtonProps = {
    text: string;
    className?: string;
    functionSend?: () => void;
}

function Button({ text, className = "", functionSend }: ButtonProps) {
    return (
      <button onClick={functionSend} className={`${className}`} >
        {text}
      </button>
    );
  }
  
  export default Button;
  