"use client";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";

export default function HubPage() {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-2xl font-bold">Manage Hub</h1>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push("/hub/add")}
        >
          Add Hub
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => router.push("/hub/edit")}
        >
          Edit Hub
        </button>
      </div>
    </div>
  );
}
