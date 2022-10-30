const Person = (props) => {
    let ageText = (props.age >= 18) ? "Please go vote.. or not" : "You must be 18";
    let nameText = props.name.slice(0, 6);
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
    return (
    <div>
            <h2>Learn some information about this person</h2>
            <ul>
                <li>Name: {nameText}</li>
                <li>Age: {props.age}</li>
                Hobbies: <ul>{hobbies}</ul>
            </ul>
            <h3>{ageText}</h3>
            Disclaimer: "The best argument against democracy is a five-minute conversation with the average voter." - Churchill
    </div>
)
}
