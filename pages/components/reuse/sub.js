import { ref, set } from "firebase/database";
import { database } from "../../firebase/firebase";
export async function subEmail(email) {
  await set(ref(database, "subscribers/" + email.slice(0, 9)), {
    email: email,
  });
  return true;
}
