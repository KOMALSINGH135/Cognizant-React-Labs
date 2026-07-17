import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">
      {showCourses && (
        <div className="section">
          <CourseDetails />
        </div>
      )}

      {showBooks && (
        <div className="section">
          <BookDetails />
        </div>
      )}

      {showBlogs && (
        <div className="section">
          <BlogDetails />
        </div>
      )}
    </div>
  );
}

export default App;