import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) return navigate('/admin');
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const credentials = btoa(
        `${import.meta.env.VITE_ADMIN_USERNAME}:${import.meta.env.VITE_ADMIN_PASSWORD}`
      );

      const res = await fetch(`${API_URL}/api/iec-leads`, {
        headers: { Authorization: `Basic ${credentials}` },
      });

      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();
      setLeads(data);
    } catch (err) {
      console.error(err);
      alert('Error fetching leads');
    }
  };

  // ✅ Search Filter
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const search = searchTerm.toLowerCase();

      return (
        (l.business_entity || l.rawPayload?.txtBusinesEntity || '')
          .toLowerCase()
          .includes(search) ||
        (l.email || l.rawPayload?.txtemail || '')
          .toLowerCase()
          .includes(search) ||
        (l.contact_no || l.rawPayload?.txtphone || '')
          .includes(search) ||
        (l.pan_no || l.rawPayload?.txtPanNo || '')
          .toLowerCase()
          .includes(search)
      );
    });
  }, [leads, searchTerm]);

  // ✅ Excel Export (Filtered data)
  const exportToExcel = () => {
    const formatted = filteredLeads.map((l, index) => ({
      'S.No': index + 1,
      'Business Name': l.business_entity || l.rawPayload?.txtBusinesEntity || '-',
      'PAN': l.pan_no || l.rawPayload?.txtPanNo || '-',
      'Mobile': l.contact_no || l.rawPayload?.txtphone || '-',
      'Email': l.email || l.rawPayload?.txtemail || '-',
      'State': l.state || l.rawPayload?.txtpstate || '-',
      'Date': new Date(l.createdAt).toLocaleDateString('en-IN'),
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'IEC_Leads');

    XLSX.writeFile(
      workbook,
      `IEC_Leads_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              IEC Leads Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Total Leads: {filteredLeads.length}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={exportToExcel}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              📤 Export to Excel
            </button>

            <button
              onClick={() => {
                sessionStorage.clear();
                navigate('/admin');
              }}
              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* 🔍 Search Box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by Business Name, Email, Mobile, PAN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4 text-left">S.No</th>
                <th className="p-4 text-left">Business Name</th>
                <th className="p-4 text-left">PAN</th>
                <th className="p-4 text-left">Mobile</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((l, index) => (
                  <tr key={l._id} className="border-b hover:bg-gray-50">

                    <td className="p-4 font-semibold">{index + 1}</td>

                    <td className="p-4 font-medium">
                      {l.business_entity || l.rawPayload?.txtBusinesEntity || "-"}
                    </td>

                    <td className="p-4">
                      {l.pan_no || l.rawPayload?.txtPanNo || "-"}
                    </td>

                    <td className="p-4">
                      {l.contact_no || l.rawPayload?.txtphone || "-"}
                    </td>

                    <td className="p-4 text-blue-600">
                      {l.email || l.rawPayload?.txtemail || "-"}
                    </td>

                    <td className="p-4">
                      {l.state || l.rawPayload?.txtpstate || "-"}
                    </td>

                    <td className="p-4 text-sm">
                      {new Date(l.createdAt).toLocaleDateString('en-IN')}
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-10 text-gray-500">
                    No matching leads found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}