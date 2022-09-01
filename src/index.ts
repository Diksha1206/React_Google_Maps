import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();
const googleMaps = new CustomMap();
googleMaps.addMarker(user);
googleMaps.addMarker(company);