import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db: any = low(adapter);
const lodashId = require("lodash-id");
db._.mixin(lodashId);
db.defaults({ servers: [] }).write();
const addNewServer = (server: any): any => {
  return db
    .get("servers")
    .insert(server)
    .write();
};
const updateServer = ({ id, ...rest }: any): any => {
  return db
    .get("servers")
    .updateById(id, rest)
    .write();
};
const deleteServer = (id: string): any => {
  return db
    .get("servers")
    .removeById(id)
    .write();
};
const fetchAllServers = (): any => {
  return db.get("servers").value();
};
export default db;
export { addNewServer, updateServer, fetchAllServers, deleteServer };