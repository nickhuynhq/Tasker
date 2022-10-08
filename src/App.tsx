import './App.scss';
import InputField from './components/InputField/InputField';

// let name: string;
// let age:  number | string;
// let hobbies: string[];
// let role: [number, string];

// interface Person {
//   name: string;
//   age: number;
// }

// let person: Person = {
//   name: "Nick",
//   age: 24,
// }

// let lotsOfPeople: Person[];

// role = [5, "string"]
// name = 'Nick';

// let printName: (name: string) => never;

const App:React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Tasker</span>
      <InputField />
    </div>
  );
}

export default App;
