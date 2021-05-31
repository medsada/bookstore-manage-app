import { useParams } from "react-router-dom";
import Myform from "./Myform";
import { useSelector } from "react-redux";

const PageForm = () => {
  const books = useSelector((state) => state.books.books);
  const allCategory = [
    "toutes",
    ...new Set(books.map((item) => item.category)),
  ];
  const { id } = useParams();
  console.log(id);
  if (id === "new") {
    return <Myform isAdd={true} categories={allCategory} />;
  }
  let input = books.find((book) => {
    return book.id == id;
  });
  return <Myform isAdd={false} categories={allCategory} dataImputs={input} />;
};

export default PageForm;
