import React,{ useEffect, useState }from'react';

export const Resume = () => {
  let[htmlFileString, setHtmlFileString] = useState();
  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`res/index.htm`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return (
    <>
     hello
     <iframe className='iframe_resume' title='idk' src="/resu/index.html"></iframe>
     {/* <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div> */}
    </>
  )
}
