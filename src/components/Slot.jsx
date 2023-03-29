import "./slot.css";
export function Slot({order , content , callback}){
    return <div className="slot" onClick={() => callback(order)}>
        {content}
    </div>
}