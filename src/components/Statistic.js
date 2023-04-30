export default function Statistic() {
  return (
    <>
      <div className="mt-10">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
          <div className="border-t-2 border-gray-100 pt-6">
            <dt className="text-base font-medium text-gray-500">Founded</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
              1939
            </dd>
          </div>
          <div className="border-t-2 border-gray-100 pt-6">
            <dt className="text-base font-medium text-gray-500">Employees</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
              Approximately 11,000
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
