import {useState,useRef}from 'react'
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import {Modern,Classic,Minimal} from './Temp';
function Inputs() {
    const [themeColor, setThemeColor] = useState("#3b82f6");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const[name,setName]=useState("");
  const [skills, setSkills] = useState([]);
  const[edu,setEdu]=useState({
    degree:"",college:"",
    year:"",exp:"",
    email:"",des:"",exp2:"",dex:"",city:""
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
 const resumeRef = useRef(null);

    const handleDownloadPDF = () => {
  const node = resumeRef.current;
  domtoimage.toJpeg(node).then((dataUrl) => {
    const pdf = new jsPDF("portrait", "mm", "a4");
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(dataUrl, "PNG", 3,3, pdfWidth, pdfHeight);
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
    <div className="h-screen w-full grid grid-cols-12 ">
      {/* Sidebar */}
      <div className="col-span-4 p-6 border-r bg-gradient-to-r -mt-5 from-teal-400 to-blue-500 shadow-sm">
         {
          selectedTemplate &&  edu.email && name && edu.city && skills && edu.des && edu.dex ? (<button
                  onClick={handleDownloadPDF}
                  className=" w-60 my-6 bg-green-500 hover:cursor-pointer text-white py-2 rounded-md "
                >
                  Download PDF
                </button>) : 
                (<p className="text-red-600">Please fill all the details and select a template to enable PDF download</p>)
        }
        <div className="space-y-6">
          {/* Theme Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Theme Color⭐</label>
            <input
              type="color"
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              className="w-12 h-8 border rounded"
            />
            
          </div>

          <div className="flex w-50 flex-col">
            
      <label className="block text-sm font-medium mb-1">Template</label>

      <button
        className="bg-amber-300 p-4 rounded-2xl hover:cursor-pointer"
        onClick={() => setSelectedTemplate("classic")}
      >
        Classic
      </button>

      <button
        className="bg-blue-300 p-4 rounded-2xl hover:cursor-pointer mt-3"
        onClick={() => setSelectedTemplate("modern")}
      >
        Modern
      </button>

      <button
        className="bg-orange-300 p-4 rounded-2xl hover:cursor-pointer mt-3"
        onClick={() => setSelectedTemplate("minimal")}
      >
        Minimal
      </button>
      </div>
          
       <div>
          {/* Designation Input */}
          
            <label className="block text-sm font-medium mb-1">Designation⭐</label>
            <input type="text"  className="w-full border rounded-md p-2" onChange={(e)=> setEdu({...edu,des:e.target.value})} placeholder="enter Your Designation"/>
       </div>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Name⭐</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email⭐</label>
            <input
              type="email"
              value={edu.email}
              onChange={(e) => setEdu({ ...edu, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">About You⭐</label>
            <textarea
              value={edu.dex} 
              onChange={(e) => setEdu({ ...edu, dex: e.target.value })}
              placeholder="A brief description about you"
              className="w-full border rounded-md p-2"
            ></textarea>
            <label className="block text-sm font-medium mb-1">City State⭐</label>
            <input
              type="text"
              value={edu.city} 
              onChange={(e) => setEdu({ ...edu, city: e.target.value })}
              placeholder="City, State"
              className="w-full border rounded-md p-2"
            ></input>
          </div>
          {/* Technical Skills */}
          <div>
  <label className="block text-sm font-medium mb-1">Technical Skills ⭐</label>
  {["HTML", "CSS", "JavaScript / Java / Python", "React / Next.js", "TailwindCSS", "Vite"].map((skill) => (
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
            <label className="block text-sm font-medium mb-1">Education⭐</label>
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
        
       </div>
         {/* Resume Preview */}
         <div className="col-span-8 p-6 overflow-y-auto min-h-screen bg-[url('/res.png')] bg-cover bg-no-repeat bg-center -mt-5">
          {selectedTemplate === "classic" && (
          <Classic
            resumeRef={resumeRef}
            themeColor={themeColor}
            fontFamily={fontFamily}
            name={name}
            edu={edu}
            skills={skills}
          />
        )}

        {selectedTemplate === "modern" && (
          <Modern
            resumeRef={resumeRef}
            themeColor={themeColor}
            fontFamily={fontFamily}
            name={name}
            edu={edu}
            skills={skills}
          />
        )}

        {selectedTemplate === "minimal" && (
          <Minimal
            resumeRef={resumeRef}
            themeColor={themeColor}
            fontFamily={fontFamily}
            name={name}
            edu={edu}
            skills={skills}
          />
        )}
      
      
       </div>
      </div>
  )
}

export default Inputs;