import { FaInfoCircle } from "react-icons/fa";

export default function InstructionsSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden lg:sticky lg:top-20">
      <div className="bg-navy-50 border-b border-navy-100 px-6 py-5 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-navy-900">
          Important Instructions
        </h2>
      </div>

      <div className="p-6 md:p-8">
        <ol className="steps-list space-y-5 text-sm text-slate-700 leading-relaxed">
          <li>
            <strong className="text-slate-900">Application Type :</strong>{" "}
            Select <strong className="text-slate-900">IEC Registration</strong>{" "}
            for a fresh IEC Code, <strong className="text-slate-900">IEC Modification</strong>{" "}
            for changes in an existing IEC Code, or{" "}
            <strong className="text-slate-900">IEC Renewal</strong> for annual update.
          </li>

          <li>
            <strong className="text-slate-900">Name of Business Entity :</strong>{" "}
            Fill the Business Entity name which will get printed on the IEC
            Certificate.
          </li>

          <li>
            <strong className="text-slate-900">Constitution of Business :</strong>{" "}
            Select the business type of the applicant in whose name the IEC is
            to be applied.
          </li>

          <li>
            <strong className="text-slate-900">Description of Business :</strong>{" "}
            Briefly describe the business / enterprise activities.
          </li>

          <li>
            <strong className="text-slate-900">Business Activity :</strong>{" "}
            Select the main business activity to be conducted.
          </li>

          <li>
            <strong className="text-slate-900">
              Date of Incorporation / Date of Birth :
            </strong>{" "}
            Select your Date of Incorporation / Date of Birth.
          </li>

          <li>
            <strong className="text-slate-900">Principal Place of Business :</strong>{" "}
            Fill the complete address of the business. State selection is
            mandatory.
          </li>

          <li>
            <strong className="text-slate-900">Any Branch :</strong> Select
            whether you have any branch office.
          </li>

          <li>
            <strong className="text-slate-900">PAN of Entity :</strong> Fill
            the correct 10-digit PAN Number of the Business Entity.
          </li>

          <li>
            <strong className="text-slate-900">Email ID :</strong> Fill the
            correct and active Email ID of the Applicant.
          </li>

          <li>
            <strong className="text-slate-900">Contact No. :</strong> Fill the
            correct 10-digit Mobile Number of the Applicant.
          </li>
        </ol>

        {/* <div className="mt-8 flex gap-3 rounded-lg border border-orange-100 bg-orange-50 p-4 text-xs sm:text-sm text-orange-900">
          <FaInfoCircle className="mt-0.5 shrink-0 text-orange-600" />
          <div>
            <p>
              Note: This is a private consultancy assisted form — not the
              official DGFT portal. The fees charged on this portal are
              consultancy charges and not government fees.
            </p>
            <p className="mt-3">
              Make sure all details match exactly with your PAN and other
              official documents to avoid rejection or delay in IEC
              registration.
            </p>
          </div>
        </div> */}
      </div>
    </aside>
  );
}