import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

// Define the Mongoose schema for the project model
const projectSchema = new Schema<TProject>({
  name: { type: String, required: true },           
  title: { type: String, required: true },          
  image: { type: String, required: false },          
  description: { type: String, required: true },   
  liveLink: { type: String, required: true },   
  serverLink: { type: String, required: false },    
  clientLink: { type: String, required: false },     
});

export const Project = model<TProject>('Project', projectSchema);
