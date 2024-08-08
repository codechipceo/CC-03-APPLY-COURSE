import { Admin } from "./Admin.js";
import { Leads } from "./Leads.js";
import { ProgramOffering } from "./ProgramOffering.js";
import { School } from "./Schools.js";
import { Locations}  from './Location.js'
// DB service
import { DatabaseService } from "./DatabaseService.js";



const adminModel = new DatabaseService(Admin)
const leadsModel = new DatabaseService(Leads)
const programOfferingModel = new DatabaseService(ProgramOffering)
const schoolModel = new DatabaseService(School)
const locationModel = new DatabaseService(Locations)
export { adminModel, leadsModel, programOfferingModel, schoolModel, locationModel}