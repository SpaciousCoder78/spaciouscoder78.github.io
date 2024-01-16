import Heading from "./Heading";
import DevIcon from "devicon-react-svg";

function kard(props) {
  return (
    <div className='flex flex-col hover:shadow-lg mx-auto max-w-[300px] h-[350px] text-center justify-evenly shadow-md hover:bg-gray-100 rounded-lg p-2 items-center m-2'>
      {props.children}
    </div>
  )
}

function kardIcon({ icon }) {
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

const frameworks = [
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
  
]

export default function Frameworks() {
  return (
    <section id='frameworks' className='scroll'>
      <Heading text='Frameworks I know'/>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  lg:max-w-5xl mx-auto'>
      {frameworks.map(({name, icon, description})=>
        <kard>
          <kardIcon icon={icon} />
          <span className="text-blue-500 text-2xl">{name}</span>
          <p className="text-gray-600">{description}</p>
        </kard>
      )}
    </div>
    </section>
  );
}