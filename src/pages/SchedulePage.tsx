import { useState } from 'react';
import { Calendar, dateFnsLocalizer, type Event } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type View = 'month' | 'week' | 'day' | 'agenda';

type AppointmentEvent = Event & {
  id: string;
  patient: string;
  type: string;
  notes: string;
  start: Date;
  end: Date;
};

interface EventInteractionArgs {
  event: AppointmentEvent;
  start: Date;
  end: Date;
}

interface DnDCalendarProps {
  localizer: ReturnType<typeof dateFnsLocalizer>;
  events: AppointmentEvent[];
  startAccessor: (event: AppointmentEvent) => Date;
  endAccessor: (event: AppointmentEvent) => Date;
  style: React.CSSProperties;
  views: View[];
  view: View;
  onView: (view: View) => void;
  date: Date;
  onNavigate: (date: Date) => void;
  defaultView: View;
  popup?: boolean;
  resizable?: boolean;
  onEventDrop: (args: EventInteractionArgs) => void;
  onEventResize: (args: EventInteractionArgs) => void;
  onSelectEvent: (event: AppointmentEvent) => void;
  eventPropGetter?: (event: AppointmentEvent) => { className: string };
  toolbar?: boolean;
}

const DnDCalendar = withDragAndDrop(Calendar) as React.ComponentType<DnDCalendarProps>;

const sampleEvents: AppointmentEvent[] = [
  {
    id: '1',
    title: 'New patient intake',
    patient: 'Maria G.',
    type: 'New Patient',
    notes: 'Initial intake and medical history review.',
    start: new Date(2026, 5, 17, 9, 0),
    end: new Date(2026, 5, 17, 9, 30),
  },
  {
    id: '2',
    title: 'Follow-up visit',
    patient: 'Thomas K.',
    type: 'Follow-up',
    notes: 'Review lab results and medication adherence.',
    start: new Date(2026, 5, 17, 10, 0),
    end: new Date(2026, 5, 17, 10, 30),
  },
  {
    id: '3',
    title: 'Medication review',
    patient: 'Aisha T.',
    type: 'Medication',
    notes: 'Confirm prescription history and side effects.',
    start: new Date(2026, 5, 17, 13, 0),
    end: new Date(2026, 5, 17, 13, 30),
  },
  {
    id: '4',
    title: 'Prescription refill follow-up',
    patient: 'N/A',
    type: 'Prescription',
    notes: 'Check status of refill request and lab orders.',
    start: new Date(2026, 5, 18, 11, 0),
    end: new Date(2026, 5, 18, 11, 15),
  },
  {
    id: '5',
    title: 'Lab review appointment',
    patient: 'Ben S.',
    type: 'Lab Review',
    notes: 'Discuss abnormal values and follow-up care.',
    start: new Date(2026, 5, 19, 14, 0),
    end: new Date(2026, 5, 19, 14, 30),
  },
];

function SchedulePage() {
  const [events, setEvents] = useState<AppointmentEvent[]>(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState<AppointmentEvent | null>(null);
  const [view, setView] = useState<View>('week');
  const [date, setDate] = useState<Date>(new Date(2026, 5, 17));

  const handleEventSelect = (event: AppointmentEvent) => {
    setSelectedEvent(event);
  };

  const handleEventDrop = (args: EventInteractionArgs) => {
    const { event, start, end } = args;
    setEvents((current) =>
      current.map((item) =>
        item.id === event.id ? { ...item, start, end } : item 
      )
    );
  };

  const handleEventResize = (args: EventInteractionArgs) => {
    const { event, start, end } = args;
    setEvents((current) =>
      current.map((item) =>
        item.id === event.id ? { ...item, start, end } : item
      )
    );
  };

  const closeModal = () => setSelectedEvent(null);

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-slate-900">Schedule</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review appointments, reschedule with drag-and-drop, and inspect appointment details.
          </p>
        </header>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <DnDCalendar
            localizer={localizer}
            events={events}
            startAccessor={(event: AppointmentEvent) => event.start}
            endAccessor={(event: AppointmentEvent) => event.end}
            style={{ height: 'calc(100vh - 220px)', minHeight: 600 }}
            views={['month', 'week', 'day', 'agenda']}
            view={view}
            onView={handleViewChange}
            date={date}
            onNavigate={handleNavigate}
            defaultView="week"
            popup
            resizable
            onEventDrop={handleEventDrop}
            onEventResize={handleEventResize}
            onSelectEvent={handleEventSelect}
            eventPropGetter={() => ({
              className:
                'rbc-event rounded-xl border-0 bg-blue-600/90 text-white px-2 py-1',
            })}
            toolbar
          />
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Appointment details</h2>
                <p className="mt-1 text-sm text-slate-600">Review or update appointment information for the selected booking.</p>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-slate-500">Type</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{selectedEvent.type}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Patient</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{selectedEvent.patient}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Start</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{selectedEvent.start?.toLocaleString() ?? 'TBD'}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">End</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{selectedEvent.end?.toLocaleString() ?? 'TBD'}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-500">Notes</p>
              <p className="mt-2 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">{selectedEvent.notes}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SchedulePage;
