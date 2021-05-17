import { useParams } from "react-router-dom";
import Myform from "./Myform";

const PageForm = ({ books, allCategory, submitHandle }) => {
  const { id } = useParams();
  console.log(id);
  if (id === "new") {
    return (
      <Myform isAdd={true} Category={allCategory} submitHandle={submitHandle} />
    );
  }
  let input = books.filter((book) => {
    return book.id == id;
  })[0];
  return (
    <Myform
      isAdd={false}
      Category={allCategory}
      submitHandle={submitHandle}
      dataImputs={input}
    />
  );
};

export default PageForm;
