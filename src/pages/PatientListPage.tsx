import { useEffect, useState } from 'react';
import Patient, { type PatientProps } from '../components/clinical/Patient';
import { caclulateAge, parseSyntheaName } from '../util/patientMapper';

function PatientList() {
  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Grab patient data from mock API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setIsLoading(true);

        const response = await fetch('/api/patients');

        if (!response.ok) {
          throw new Error(
            `Error: ${response.status}. Failed to fetch patients.`,
          );
        }

        const patients = await response.json();
        
        // Parse patient data
        for (const patient of patients) {
          // Parse patient name into object containing sterilized firstName and lastName strings
          patient.name = parseSyntheaName(patient.name);
          // Calculate patients age
          patient.age = caclulateAge(patient.dob);
        }

        setPatients(patients);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'An unknown error occurred.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (isLoading) {
    return <div className="loading-spinner">Loading patient records...</div>;
  }

  if (error) {
    return <div className="error-banner">Error loading patients: {error}</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Patient Directory
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            A comprehensive list of all registered clinic patients.
          </p>
        </div>
      </div>

      {patients.length === 0 ? (
        <div className="text-center py-12 bg-white border border-dashed border-slate-300 rounded-lg">
          <p className="text-slate-500 font-medium">
            No patient records found.
          </p>
        </div>
      ) : (
        <div className="bg-red border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-700 font-semibold uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-3.5">Patient Name</th>
                  <th className="px-6 py-3.5">Date of Birth</th>
                  <th className="px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                {patients.map((patient) => (
                  <Patient key={patient.id} {...patient} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientList;
