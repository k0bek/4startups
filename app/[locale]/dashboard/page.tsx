import { auth } from "@/auth";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  console.log(session);
  return <div>Dashboard</div>;
};

export default Dashboard;
