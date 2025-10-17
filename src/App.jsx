// src/pages/ResumeCustomizer.jsx
import React, { useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
 import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

export default function ResumeCustomizer() {
  const [themeColor, setThemeColor] = useState("#3b82f6");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const[name,setName]=useState("");
  const [skills, setSkills] = useState([]);
  const[edu,setEdu]=useState({
    degree:"",college:"",
    year:"",exp:"",
    email:"",des:" ",exp2:""
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

       
      </div>

      {/* Resume Preview */}
      <div className="col-span-8 p-8 overflow-y-auto bg-gray-100">
        <div ref={resumeRef}>
          <Tabs>
            <TabList className="flex space-x-2 mb-4 border-b pb-2">
              <Tab className="px-4 py-2 bg-white border rounded cursor-pointer focus:outline-none hover:bg-gray-100">
                Classic
              </Tab>
              <Tab className="px-4 py-2 bg-white border rounded cursor-pointer focus:outline-none hover:bg-gray-100">
                Modern
              </Tab>
              <Tab className="px-4 py-2 bg-white border rounded cursor-pointer focus:outline-none hover:bg-gray-100">
                Minimal
              </Tab>
            </TabList>

             <button
          onClick={handleDownloadPDF}
          className="ml-96 w-60 my-6 bg-green-500 hover:cursor-pointer text-white py-2 rounded-md "
        >
          Download PDF
        </button>

            {/* Classic Template */}
            <TabPanel>
              <div
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md"
                style={{ fontFamily:`${fontFamily}`, borderTop: `6px solid ${themeColor}` }}
              >
                <h1 className="text-3xl font-bold mb-2" style={{ color: themeColor }}>
                  {name}     
                </h1>
                <p className="text-gray-600 mb-6">{edu.des}</p>
                <span className="ml-89 mb-6 font-semibold">{edu.email}</span>
                <br /><br />
                <section>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: themeColor }}>
                    Experience
                  </h2>
                  <p className="font-medium text-gray-800">{edu.exp}</p>
                  <p className="text-gray-600 text-sm">
                {edu.exp2}
                  </p><br />
                   <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Tecnical Skills
                </h2>
               <ul className="text-gray-700 list-disc list-inside">
  {skills.length > 0 ? (
    skills.map((skill) => <li key={skill}>{skill}</li>)
  ) : (
   <p className="text-red-500">No skills selected</p> 
  )}
</ul><br />
                <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Education
                </h2>
                <p className="text-gray-700">
                  {edu.degree} - {edu.college} <br />
                  Passout {edu.year}
                </p>
                </section>
              </div>
            </TabPanel>

            {/* Modern Template */}
            <TabPanel>
              <div
                className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg border-l-8"
                style={{ fontFamily:`${fontFamily}`, borderColor: themeColor }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold" style={{ color: themeColor }}>
                      {name}
                    </h1>
                    <p className="text-gray-500">{edu.des}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{edu.email}</p>
                </div>

                <h2 className="text-xl font-semibold mb-2" style={{ color: themeColor }}>
                  Experience
                </h2>
                <p className="font-medium text-gray-800">{edu.exp}</p>
                <p className="text-gray-600 text-sm">
                 {edu.exp2}
                </p>
                <br />
                 <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Tecnical Skills
                </h2>
               <ul className="text-gray-700 list-disc list-inside">
  {skills.length > 0 ? (
    skills.map((skill) => <li key={skill}>{skill}</li>)
  ) : (
    <i className="text-red-500">No skills selected</i>
  )}
</ul>
                <br />
                <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Education
                </h2>
                <p className="text-gray-700">
                  {edu.degree} - {edu.college} <br />
                  Passout : {edu.year}
                </p>
              </div>
            </TabPanel>

            {/* Minimal Template */}
            <TabPanel>
              <div
                className="max-w-3xl mx-auto bg-white p-6 border border-gray-300 rounded-md"
                style={{ fontFamily:`${fontFamily}` }}
              >
                <h1
                  className="text-2xl font-semibold mb-1 tracking-tight"
                  style={{ color: themeColor }}
                >
                  {name}
                </h1>
                <p className="text-sm text-gray-500 mb-4">{edu.des}</p>
                <span className="ml-89 text-sm text-gray-500">{edu.email}</span>
                <br /><br />
                <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Experience
                </h2>
                <p className="text-gray-700">{edu.exp}</p><br />
                <p className="text-gray-600 text-sm">
                 {edu.exp2}
                </p><br />
                <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Tecnical Skills
                </h2>
                <ul className="text-gray-700 list-disc list-inside">
  {skills.length > 0 ? (
    skills.map((skill) => <li key={skill}>{skill}</li>)
  ) : (
    <i className="text-red-400">No skills selected</i>
  )}
</ul><br />
                <h2 className="text-lg font-semibold mb-1" style={{ color: themeColor }}>
                  Education
                </h2>
                <p className="text-gray-700">
                  {edu.degree} - {edu.college}
                  <br />
                  Passout : {edu.year}
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
