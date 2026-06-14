import { Link } from "react-router-dom";
import {} from "../../util/patientMapper";

export type PatientProps = {
  id: string;
  age: number;
  name: {
    firstName: string;
    lastName: string;
  }
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  status: string;
};

function Patient({ id, age, firstName, lastName, email }: PatientProps) {
  return (
    <li className="odd:bg-blue-200/50 hover:bg-blue-300">
      <Link className="block p-3" to={`/patients/${id}`}>
        <div>
          <span className="text-xl mr-2">{firstName + " " + lastName}</span><span className="text-sm">{age + " years old"}</span>
          <br />
          <span className="italic">{email}</span>
        </div>
      </Link>
    </li>
  );
}

export default Patient;