import Heading from "./Heading";
import DevIcon from "devicon-react-svg";

function Card(props) {
  return (
    <div className='flex flex-col hover:shadow-lg mx-auto max-w-[300px] h-[350px] text-center justify-evenly shadow-md hover:bg-gray-100 rounded-lg p-2 items-center m-2'>
      {props.children}
    </div>
  )
}

function CardIcon({ icon }) {
  return (
    <div className='rounded-full p-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-500'>
      <DevIcon
        icon={icon}
        style={{
          fill: "#ffffff",
          width: "50px"
        }}
      />
    </div>
  )
}

const languages = [
  {
    name: "Python",
    icon: "python",
    description: "Interpreted, high-level programming language. emphasizes code readability with its use of significant indentation",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    description: "Just-in-Time compiled, multi-paradigm programming language. curly-bracket syntax, dynamic typing, prototype-based object-orientation",
  },
  {
    name: "TypeScript",
    icon: "typescript_badge",
    description: " A free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
  },
  {
    name: "Java",
    icon: "java",
    description: "Class-based, object-oriented programming language. intended to let application developers write once, run anywhere",
  },
  {
    name: "PHP",
    icon: "php",
    description: "A general-purpose scripting language and interpreter that is freely available and widely used for web development",
  },
  {
    name: "Kotlin",
    icon: "android",
    description: "An open-source, statically-typed programming language that supports both object-oriented and functional programming",
  },
  
]

export default function Language() {
  return (
    <section id='languages' className='scroll'>
      <Heading text='Some Of The Languages I know'/>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  lg:max-w-5xl mx-auto'>
      {languages.map(({name, icon, description})=>
        <Card>
          <CardIcon icon={icon} />
          <span className="text-blue-500 text-2xl">{name}</span>
          <p className="text-gray-600">{description}</p>
        </Card>
      )}
    </div>
    </section>
  );
}