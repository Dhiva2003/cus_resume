import {useState,useRef}from 'react'
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import Temp from './Temp';
function Inputs() {
    const [themeColor, setThemeColor] = useState("#3b82f6");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const[name,setName]=useState("");
  const [skills, setSkills] = useState([]);
  const[edu,setEdu]=useState({
    degree:"",college:"",
    year:"",exp:"",
    email:"",des:"",exp2:""
  });
  
 const resumeRef = useRef();

    const handleDownloadPDF = () => {
  const node = resumeRef.current;
  domtoimage.toPng(node).then((dataUrl) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(dataUrl, "JPG", 3, 3, pdfWidth, pdfHeight);
    pdf.save("My_Resume.pdf");
  });
};
   



const handleSkillChange = (e) => {
  const { value, checked } = e.target;
  if (checked) {
    setSkills([...skills, value]);
  } else {
    setSkills(skills.filter((skill) => skill !== value));
  }
};


  return (
    <div className="h-screen w-full grid grid-cols-12 bg-gray-50">
      {/* Sidebar */}
      <div className="col-span-4 p-6 border-r bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Customize Resume</h2>

        <div className="space-y-6">
          {/* Theme Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Theme Color</label>
            <input
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              className="w-12 h-8 border rounded"
            />
            
          </div>
       
       <div>
          {/* Designation Input */}
          
            <label className="block text-sm font-medium mb-1">Designation</label>
            <input type="text"  className="w-full border rounded-md p-2" onChange={(e)=> setEdu({...edu,des:e.target.value})} placeholder="enter Your Designation"/>
       </div>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={edu.email}
              onChange={(e) => setEdu({ ...edu, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full border rounded-md p-2"
            />
          </div>
          {/* Technical Skills */}
          <div>
  <label className="block text-sm font-medium mb-1">Technical Skills</label>
  {["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Vite"].map((skill) => (
    <div key={skill}>
      <input
        type="checkbox"
        value={skill}
        checked={skills.includes(skill)}
        onChange={handleSkillChange}
        className="w-4 h-4 mr-1"
      />
      {skill}
    </div>
  ))}
</div>
          {/* Education Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Education</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
              placeholder="Degree"
              className="w-full border rounded-md p-2 mb-2"
            />
            <input
              type="text"
              value={edu.college}
              onChange={(e) => setEdu({ ...edu, college: e.target.value })}
              placeholder="College"
              className="w-full border rounded-md p-2 mb-2"
            />
            <input
              type="number"
              value={edu.year}
              onChange={(e) => setEdu({ ...edu, year: e.target.value })}
              placeholder="Year of Graduation"
              className="w-full border rounded-md p-2"
            />
          </div>
              <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <input
              type="text"
              value={edu.exp}
              onChange={(e) => setEdu({ ...edu, exp: e.target.value })}
              placeholder="Company And Designation"
              className="w-full border rounded-md p-2"
            />
            <input type="text"  onChange={(e)=>setEdu({...edu,exp2:e.target.value})} 
            placeholder="Enter year and oneLine Ex: 2020 - Present | Built web apps using React and Vite."
             className="w-full border rounded-md p-2 mt-3" />
              </div>
          {/* Font */}
          <div>
            <label className="block text-sm font-medium mb-1">Font</label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full border rounded-md p-2"
            >
              <option>sans-serif</option>
              <option>revert-layer</option>
              <option>monospace</option>
              <option>cursive</option>
              <option>-moz-initial</option>
            </select>
          </div>
        </div>
        <button
                  onClick={handleDownloadPDF}
                  className=" w-60 my-6 bg-green-500 hover:cursor-pointer text-white py-2 rounded-md "
                >
                  Download PDF
                </button>
       </div>
         {/* Resume Preview */}
         <div className="col-span-8 p-6 overflow-y-auto h-screen">
       <Temp resumeRef={resumeRef} themeColor={themeColor} fontFamily={fontFamily} name={name} edu={edu} skills={skills}/>
       </div>
      </div>
  )
}

export default Inputs;