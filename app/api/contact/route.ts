import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();

  // Define directory and file path
  const dirPath = path.join(process.cwd(), "data");
  const filePath = path.join(dirPath, "submissions.json");

  // Create the 'data' directory if it doesn't exist
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    console.log("Created 'data' directory.");
  }

  // Read existing data or create an empty array
  let existingData = [];
  try {
    if (existsSync(filePath)) {
      const fileData = readFileSync(filePath, "utf8");
      existingData = JSON.parse(fileData);
    } else {
      console.log("No existing submissions.json file, creating a new one.");
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }

  // Append new data
  existingData.push(data);

  // Write back to file
  writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  console.log("Form submission saved:", data);
  return NextResponse.json({ message: "Form submitted successfully" });
}
