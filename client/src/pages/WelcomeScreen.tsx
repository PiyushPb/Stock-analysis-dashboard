import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function WelcomeScreen() {
  const navigate = useNavigate();
  const [isPinging, setIsPinging] = useState(true);
  const [pingFailed, setPingFailed] = useState(false);

  const pingBackend = async () => {
    try {
      const res = await fetch("http://localhost:8000/ping");
      const text = await res.text();

      if (text.trim().toLowerCase() === "pong") {
        navigate("/dashboard");
      } else {
        setPingFailed(true);
        setIsPinging(false);
      }
    } catch (error) {
      console.error("Ping failed:", error);
      setPingFailed(true);
      setIsPinging(false);
    }
  };

  useEffect(() => {
    pingBackend();
  }, []);

  return (
    <div className="w-full min-h-screen p-10 flex justify-center items-center bg-gray-100">
      <div className="max-w-[800px] w-full p-8 bg-white rounded-lg shadow-sm space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Hey there,</h1>

        <p className="text-gray-700 text-base leading-relaxed">
          This is an <span className="font-medium">analytical dashboard</span>{" "}
          built using <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Vite</span>,{" "}
          <span className="font-medium">TypeScript</span>, and{" "}
          <span className="font-medium">Tailwind CSS</span> for the Journalyst
          assessment.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Since I’m using free hosting services —{" "}
          <span className="font-medium">Firebase</span> for the frontend and{" "}
          <span className="font-medium">Netlify</span> for the backend — there
          may be some delay due to cold starts.
        </p>

        {isPinging ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
            <span className="text-gray-600 text-sm">Pinging backend...</span>
          </div>
        ) : pingFailed ? (
          <p className="text-sm text-red-600">
            Failed to reach backend. Please try again.
          </p>
        ) : null}

        <p className="text-gray-700 text-base leading-relaxed">
          Once the backend is ready, you'll be redirected to the dashboard. If
          not, click the button below to retry.
        </p>

        <Button className="mt-2" onClick={pingBackend}>
          Refresh
        </Button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
