import { Admin } from "./Admin.js";
import { Leads } from "./Leads.js";
import { ProgramOffering } from "./ProgramOffering.js";
import { School } from "./Schools.js";
// DB service
import { DatabaseService } from "./DatabaseService.js";



const adminModel = new DatabaseService(Admin)
const leadsModel = new DatabaseService(Leads)
const programOfferingModel = new DatabaseService(ProgramOffering)
const schoolModel = new DatabaseService(School)

export { adminModel, leadsModel, programOfferingModel, schoolModel}