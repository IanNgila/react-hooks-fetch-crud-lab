import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function updatePage(data, method, initial){
    method([...initial, data])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm updatePage={updatePage}/> : 
      <QuestionList updatePage={updatePage}/>}
    </main>
  );
}

export default App;
