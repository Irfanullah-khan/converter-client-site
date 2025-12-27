import { useState } from "react";
import axios from "axios";


// 🔵 Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center mt-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// 🔵 Progress Bar Component
const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-300 rounded-full h-3 mt-3">
    <div
      className="bg-blue-600 h-3 rounded-full transition-all"
      style={{ width: progress + "%" }}
    ></div>
  </div>
);

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  // NEW STATES
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(false);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  const [showHistory, setShowHistory] = useState(false);

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
  ];

  const validateFile = (selected) => {
    if (!selected) return;

    // 🔥 File size validation
    if (selected.size > 15 * 1024 * 1024) {
      setError("❌ File too large! Max 15 MB allowed.");
      setFile(null);
      return;
    }

    if (!allowedTypes.includes(selected.type)) {
      setError("❌ Invalid file! Only PDF, DOCX, JPG, PNG allowed.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    validateFile(e.dataTransfer.files[0]);
  };

  const uploadAndConvert = async () => {
    if (!file) return;

    setStatus("Uploading...");
    setProgress(20); // fake progress start

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Upload
      const uploadRes = await axios.post(
        // "http://localhost:5000/api/upload",
        "https://converter-server-site.onrender.com/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const uploadedPath = uploadRes.data.filePath;

      // Determine conversion type
      let type = "";
      if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        type = "docx-to-pdf";
      }
      if (file.type === "application/pdf") {
        type = "pdf-to-docx";
      }
      if (file.type.includes("image")) {
        type = "img-to-pdf";
      }

      setStatus("Converting...");
      setProgress(60); // mid progress

      // Convert
      const convertRes = await axios.post(
        // "http://localhost:5000/api/convert",
        "https://converter-server-site.onrender.com/api/convert",
        {
        filePath: uploadedPath,
        type,
      });

      setStatus("Completed!");
      setProgress(100); // full progress

      // setDownloadLink("http://localhost:5000" + convertRes.data.downloadUrl);
      setDownloadLink("https://converter-server-site.onrender.com" + convertRes.data.downloadUrl);


      // 🔥 Save history
      const record = {
        name: file.name,
        convertedTo: type,
        time: new Date().toLocaleString(),
      };
      const updated = [record, ...history];
      setHistory(updated);
      localStorage.setItem("history", JSON.stringify(updated));
    } catch (err) {
      setStatus("");
      setError("❌ Something went wrong during upload or conversion!");
    }
  };

  return (
    
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white flex justify-center items-center p-6"
          : "min-h-screen bg-gray-100 flex justify-center items-center p-6"
      }
    >
      {/* 🔥 DARK MODE BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-5 right-5 bg-gray-800 text-white px-4 py-1 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="bg-white dark:bg-gray-800 dark:text-white p-8 shadow-xl rounded-2xl w-full max-w-xl">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">
          Upload & Convert
        </h1>

        {/* Drag and Drop Area */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl p-10 text-center hover:border-blue-500 transition"
        >
          <p className="text-gray-500 dark:text-gray-300 mb-3">
            Drag & Drop your file
          </p>
          <p className="text-sm text-gray-400">OR</p>

          <label className="bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer inline-block mt-3">
            Choose File
            <input
              type="file"
              className="hidden"
              onChange={(e) => validateFile(e.target.files[0])}
            />
          </label>
        </div>

        {/* Selected File */}
        {file && (
          <div className="mt-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
            📄 <b>{file.name}</b>
            <p className="text-sm mt-1">
              Size: {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Upload Button */}
        <button
          onClick={uploadAndConvert}
          disabled={!file}
          className={`mt-6 w-full py-3 text-white font-bold rounded-lg ${
            file
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {status === "" ? "Start Conversion" : status}
        </button>

        {/* 🔵 Loading & Progress */}
        {(status === "Uploading..." || status === "Converting...") && (
          <LoadingSpinner />
        )}
        {progress > 0 && <ProgressBar progress={progress} />}

        {/* Download Button */}
        {downloadLink && (
          <a
            href={downloadLink}
            download
            className="block bg-blue-600 text-white text-center mt-4 py-2 rounded-lg"
          >
            Download Converted File
          </a>
        )}

        {/* 🔥 History Section */}
        {/* 🔥 History Toggle Button */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="mt-6 w-full py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-lg font-medium hover:opacity-90"
        >
          {showHistory ? "Hide History" : "View History"}
        </button>

        {/* 🔥 History List (only when toggled) */}
        {showHistory && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-3">Recent Conversions</h2>

            {history.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded mb-2 shadow"
              >
                <p>
                  <b>{item.name}</b>
                </p>
                <p>Converted to: {item.convertedTo}</p>
                <p className="text-sm opacity-70">{item.time}</p>
              </div>
            ))}

            {history.length === 0 && (
              <p className="opacity-70">No history found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

