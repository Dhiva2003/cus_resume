export function Modern({resumeRef,fontFamily,name,edu,skills,themeColor}) {
  return (

              <div ref={resumeRef}
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
                  <p>{edu.city}</p>
                  <p className="text-gray-500 text-sm">{edu.email}</p>
                </div>
             <section>
              <h2 className="text-xl font-semibold mbt" style={{ color: themeColor }}>
                Summary
              </h2>
              {edu.dex}
            </section><br />
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
  )           
}


 export function  Classic({resumeRef,fontFamily,name,edu,skills,themeColor}) {
  return (
    
      <div className="col-span-8 p-8 overflow-y-auto bg-gray-100">
        <div >
          {/* Classic Template */}
          <div ref={resumeRef}
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
     <br /> <span className="text-sm text-gray-500 font-semibold text-end" >
        {edu.city}
      </span>
    </div>
    <p className="text-gray-600 -mt-7">{edu.des}</p>
                <br />
            <section>
              <h2 className="text-xl font-semibold mb-2" style={{ color: themeColor }}>
                Summary
              </h2>
              {edu.dex}
            </section>
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
        </div>
      </div>
  )
}




export function Minimal({ name, edu, skills, resumeRef, fontFamily, themeColor }) {
  return (
    <div ref={resumeRef}>
      <div
        className="max-w-3xl mx-auto p-6 md:p-10 bg-white shadow-lg print:shadow-none rounded-lg border border-gray-300"
        style={{
          
          border: `2px solid ${themeColor}`,
        }}
      >
        <header className="pb-4 mb-4 border-b border-gray-300">
          <h1 className="text-4xl font-bold tracking-tight" style={{
          fontFamily: fontFamily || "sans-serif",
          color: themeColor || "#000000",
        }}>{name}</h1>
          <div className="flex flex-wrap text-sm mt-1 space-x-4">
            <span>{edu.des}</span>
            <a
              href={`mailto:${edu.email}`}
              className="hover:text-blue-600 text-end"
            >
              {edu.email}
            </a>
              <span>{edu.city}</span>
          </div>
        </header>
   
       <section>
              <h2 className="text-2xl font-semibold -mt-1" style={{ color: themeColor,fontFamily: fontFamily || "sans-serif", }}>
                Summary
              </h2>
              {edu.dex}
            </section><br />
        <section className="pb-4 mb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold  mb-4 uppercase tracking-wider " style={{
          fontFamily: fontFamily || "sans-serif",
          color: themeColor || "#000000",
        }}>
            Experience
          </h2>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-800">{edu.exp}</h3>
              <span className="text-sm text-gray-500 font-medium">
                {edu.exp2}
              </span>
            </div>
          </div>
        </section>

        <section className="pb-4">
          <h2 className="text-xl font-semibold mb-4 uppercase tracking-wider" style={{
          fontFamily: fontFamily || "sans-serif",
          color: themeColor || "#000000",
        }}>
            Technical Skills
          </h2>
            
              <ul className="list-disc list-inside">
                {skills.length > 0 ? (
                  skills.map((skill) => <li key={skill}>{skill}</li>)
                ) : (
                  <p className="text-red-500">No skills selected</p>
                )}
              </ul>
            
        <br />

          <div>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wider"
            style={{
          fontFamily: fontFamily || "sans-serif",
          color: themeColor || "#000000",
        }}>
              Education
            </h2>

            <div className="text-gray-700">
              <p className="font-medium">
                {edu.degree} - {edu.college}
              </p>
              <p className="text-lg">Passout: {edu.year}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}




