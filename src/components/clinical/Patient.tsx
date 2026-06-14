import { useNavigate } from "react-router-dom";

export type PatientProps = {
  id: string;
  age: number;
  name: {
    firstName: string;
    lastName: string;
  }

  email: string;
  dob: string;
  status: string;
};

function Patient({ 
    id, 
    age, 
    dob,
    name,  
    email,
    status,
  }: PatientProps) {
    const navigate = useNavigate();

    const handleRowClick = () => {
      navigate(`/patients/${id}`)
    }
  return (
      <tr className="hover:bg-gray-300 cursor-pointer transition-colors" onClick={handleRowClick}>
        <td className="px-6 py-4 font-medium text-slate-900">
          <div>{`${name.firstName} ${name.lastName}`}</div>
          <div className="text-xs text-slate-400 font-normal mt-0.5">
            {email}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {`${dob} (${age})`}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                status === 'Active'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`}
            />
            {status}
          </span>
        </td>
      </tr>
  );
}

export default Patient;