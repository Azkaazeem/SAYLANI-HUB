import React, { useEffect, useState } from 'react';
import { supabase } from '../components/lib/supabaseClient';
import Swal from 'sweetalert2';
import { MapPin, Clock, Trash2, PlusCircle, CalendarDays, Loader2, Map } from 'lucide-react';

export default function VolunteerSchedule() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({ location: '', time_slot: '', map_link: '' });

  const fetchSlots = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('volunteer_slots').select('*').order('created_at', { ascending: false });
    if (!error && data) setSlots(data);
    setLoading(false);
  };

  useEffect(() => { fetchSlots(); }, []);

  const handleAddSlot = async (e) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('volunteer_slots').insert([formData]);
    setSaving(false);

    if (error) {
      Swal.fire('Error', error.message, 'error');
    } else {
      Swal.fire({ icon: 'success', title: 'Schedule Added!', showConfirmButton: false, timer: 1500 });
      setFormData({ location: '', time_slot: '', map_link: '' });
      fetchSlots();
    }
  };

  const handleDelete = async (id) => {
    const { isConfirmed } = await Swal.fire({ title: 'Delete Schedule?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444' });
    if (isConfirmed) {
      await supabase.from('volunteer_slots').delete().eq('id', id);
      fetchSlots();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3 mb-6">
          <CalendarDays className="text-[#65A338]" size={28} /> Manage Duty Schedules
        </h2>
        
        {/* Form to Add Schedule */}
        <form onSubmit={handleAddSlot} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 dark:bg-slate-700/50 p-5 rounded-xl border border-gray-200 dark:border-slate-600">
          <input type="text" placeholder="Location Name" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-[#65A338] outline-none" required />
          <input type="url" placeholder="Google Map Link (URL)" value={formData.map_link} onChange={(e) => setFormData({...formData, map_link: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-[#65A338] outline-none" required />
          <input type="text" placeholder="Timing (e.g. 10 AM - 2 PM)" value={formData.time_slot} onChange={(e) => setFormData({...formData, time_slot: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-[#65A338] outline-none" required />
          <button type="submit" disabled={saving} className="bg-[#014990] hover:bg-blue-800 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 transition-colors">
            {saving ? <Loader2 className="animate-spin" /> : <><PlusCircle size={20} /> Add Duty</>}
          </button>
        </form>
      </div>

      {/* List of Schedules (2 Sides Design) */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">Active Locations & Timings</h3>
        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-[#65A338] w-8 h-8" /></div>
        ) : slots.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No schedules available right now.</p>
        ) : (
          <div className="space-y-4">
            {slots.map(slot => (
              <div key={slot.id} className="flex flex-col md:flex-row justify-between items-center bg-gray-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all">
                
                {/* Side 1: Location & Map */}
                <div className="flex-1 flex items-start gap-3 w-full md:w-auto mb-4 md:mb-0">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl"><MapPin className="text-[#65A338]" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800 dark:text-white">{slot.location}</h4>
                    <a href={slot.map_link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-500 hover:text-blue-700 flex items-center gap-1 mt-1">
                      <Map size={14} /> (View on Google Maps)
                    </a>
                  </div>
                </div>

                {/* Side 2: Timing & Delete Button */}
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-gray-200 dark:border-slate-700 pt-4 md:pt-0">
                  <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-800">
                    <Clock className="text-[#014990] dark:text-blue-400" size={20} />
                    <span className="font-bold text-[#014990] dark:text-blue-300">{slot.time_slot}</span>
                  </div>
                  <button onClick={() => handleDelete(slot.id)} className="p-2.5 bg-red-100 hover:bg-red-500 text-red-600 hover:text-white rounded-xl transition-all" title="Remove">
                    <Trash2 size={20} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}