import { http, HttpResponse } from 'msw';
import { type Bundle, type Patient } from 'fhir/r4';
import allPatientsRaw from '../data/all_patients.json';

const allPatients = allPatientsRaw as Bundle[];

export const handlers = [
  http.get('/api/patients', () => {
    const summaryList = allPatients.map((bundle) => {
      const patientResource = bundle.entry?.find(
        (e) => e.resource?.resourceType === 'Patient',
      )?.resource as Patient;
      return {
        id: patientResource?.id,
        name: `${patientResource?.name?.[0]?.given?.[0]} ${patientResource?.name?.[0]?.family}`,
        dob: patientResource?.birthDate,
        gender: patientResource?.gender,
      };
    });

    return HttpResponse.json(summaryList);
  }),

  http.get('/api/patients/:id', ({ params }) => {
    const { id } = params;

    const targetBundle = allPatients.find(bundle => {
      const patientResource = bundle.entry?.find(e => e.resource?.resourceType === "Patient")?.resource;
      return patientResource?.id === id;
    });

    if (!targetBundle) {
      return new HttpResponse(null, { status: 404, statusText: "Patient not found"});
    }

    return HttpResponse.json<Bundle>(targetBundle);
  })
];
