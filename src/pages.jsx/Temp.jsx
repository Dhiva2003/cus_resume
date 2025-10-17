import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Temp({resumeRef,fontFamily,name,edu,skills,themeColor}) {
   console.log(edu);
   
  return (
    <div>
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

             

            {/* Classic Template */}
            <TabPanel>
              <div
                className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md"
                style={{ fontFamily:`${fontFamily}`, borderTop: `6px solid ${themeColor}` }}
              >
               
                 <div className="flex justify-between items-start mb-6" >
      <h1 className="text-3xl font-bold" style={{ color: themeColor }}>
        {name}
      </h1>
      <span className="text-sm text-gray-500 font-semibold" >
        {edu.email}
      </span>
    </div>
    <p className="text-gray-600 -mt-7">{edu.des}</p>
                <br />
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
  )
}

export default Temp