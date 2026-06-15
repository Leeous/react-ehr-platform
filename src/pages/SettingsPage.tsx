import { useState } from 'react';

interface ProviderSettings {
  practiceName: string;
  location: string;
  specialty: string;
  npi: string;
  licenseNumber: string;
  timeZone: string;
  operatingHoursStart: string;
  operatingHoursEnd: string;
  appointmentDuration: number;
  sessionTimeout: number;
  appointmentReminders: boolean;
  labResultNotifications: boolean;
  criticalValueAlerts: boolean;
  notificationMethod: 'email' | 'sms' | 'both';
  trackPatientSatisfaction: boolean;
  trackWaitTimes: boolean;
  auditLoggingLevel: 'basic' | 'detailed' | 'comprehensive';
}

function Settings() {
  const [settings, setSettings] = useState<ProviderSettings>({
    practiceName: 'Riverside Medical Group',
    location: 'New York, NY',
    specialty: 'Internal Medicine',
    npi: '1234567890',
    licenseNumber: 'MD-12345',
    timeZone: 'America/New_York',
    operatingHoursStart: '09:00',
    operatingHoursEnd: '17:00',
    appointmentDuration: 30,
    sessionTimeout: 30,
    appointmentReminders: true,
    labResultNotifications: true,
    criticalValueAlerts: true,
    notificationMethod: 'email',
    trackPatientSatisfaction: true,
    trackWaitTimes: true,
    auditLoggingLevel: 'detailed',
  });

  const handleInputChange = (field: keyof ProviderSettings, value: string | number | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        {/* Account & Organization Section */}
        <section className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Account & Organization</h2>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Name</label>
                <input
                  type="text"
                  value={settings.practiceName}
                  onChange={(e) => handleInputChange('practiceName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={settings.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                <input
                  type="text"
                  value={settings.specialty}
                  onChange={(e) => handleInputChange('specialty', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">NPI</label>
                <input
                  type="text"
                  value={settings.npi}
                  onChange={(e) => handleInputChange('npi', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                <input
                  type="text"
                  value={settings.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                <select
                  value={settings.timeZone}
                  onChange={(e) => handleInputChange('timeZone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="America/New_York">America/New_York (EST)</option>
                  <option value="America/Chicago">America/Chicago (CST)</option>
                  <option value="America/Denver">America/Denver (MST)</option>
                  <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hours of Operation Start</label>
                <input
                  type="time"
                  value={settings.operatingHoursStart}
                  onChange={(e) => handleInputChange('operatingHoursStart', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hours of Operation End</label>
                <input
                  type="time"
                  value={settings.operatingHoursEnd}
                  onChange={(e) => handleInputChange('operatingHoursEnd', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Patient Management Section */}
        <section className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Patient Management</h2>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Appointment Duration (minutes)</label>
                <input
                  type="number"
                  value={settings.appointmentDuration}
                  onChange={(e) => handleInputChange('appointmentDuration', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Notifications & Alerts Section */}
        <section className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Notifications & Alerts</h2>
          </div>
          <div className="px-6 py-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="appointments"
                  checked={settings.appointmentReminders}
                  onChange={(e) => handleInputChange('appointmentReminders', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="appointments" className="ml-3 text-sm font-medium text-gray-700">
                  Appointment Reminders
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="labResults"
                  checked={settings.labResultNotifications}
                  onChange={(e) => handleInputChange('labResultNotifications', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="labResults" className="ml-3 text-sm font-medium text-gray-700">
                  Lab Result Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="criticalAlerts"
                  checked={settings.criticalValueAlerts}
                  onChange={(e) => handleInputChange('criticalValueAlerts', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="criticalAlerts" className="ml-3 text-sm font-medium text-gray-700">
                  Critical Value Alerts
                </label>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Notification Method</label>
                <select
                  value={settings.notificationMethod}
                  onChange={(e) => handleInputChange('notificationMethod', e.target.value as 'email' | 'sms' | 'both')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Access Section */}
        <section className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Security & Access</h2>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleInputChange('sessionTimeout', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Audit Logging Level</label>
                <select
                  value={settings.auditLoggingLevel}
                  onChange={(e) => handleInputChange('auditLoggingLevel', e.target.value as 'basic' | 'detailed' | 'comprehensive')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="basic">Basic</option>
                  <option value="detailed">Detailed</option>
                  <option value="comprehensive">Comprehensive</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Reporting</h2>
          </div>
          <div className="px-6 py-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="satisfaction"
                  checked={settings.trackPatientSatisfaction}
                  onChange={(e) => handleInputChange('trackPatientSatisfaction', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="satisfaction" className="ml-3 text-sm font-medium text-gray-700">
                  Track Patient Satisfaction
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="waitTimes"
                  checked={settings.trackWaitTimes}
                  onChange={(e) => handleInputChange('trackWaitTimes', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="waitTimes" className="ml-3 text-sm font-medium text-gray-700">
                  Track Wait Times
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            Save Changes
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 font-medium">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;