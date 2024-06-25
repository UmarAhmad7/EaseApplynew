import { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import jobData from "./components/JobDummyData";
import { db } from "./firebase.config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);
  const [rst, setRst] = useState(false);

  const fetchJobs = async () => {
    try {
      setRst(false);
      const temp = [];
      const jobRef = collection(db, "jobs");
      const q = query(jobRef, orderBy("postedOn", "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) =>
        temp.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() })
      );
      setJobs(temp);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchJobsCustom = async (jobCriteria) => {
    try {
      setRst(true);
      const temp = [];
      const jobRef = collection(db, "jobs");
      const q = query(
        jobRef,
        where("type", "==", jobCriteria.type),
        where("title", "==", jobCriteria.title),
        where("experience", "==", jobCriteria.experience),
        where("location", "==", jobCriteria.location),
        orderBy("postedOn", "desc")
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) =>
        temp.push({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() })
      );
      setJobs(temp);
    } catch (error) {
      console.error("Error fetching custom jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Searchbar fetchJobsCustom={fetchJobsCustom} />
      {rst && (
        <div className="self-end flex flex-row-reverse">
          <button onClick={fetchJobs} className="flex">
            <p className="bg-blue-500 px-10 p-2 m-2 rounded-md text-white">Clear Filter</p>
          </button>
        </div>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;
