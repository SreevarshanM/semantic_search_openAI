const TableData = () => {
  return (
    <table class="min-w-full mt-12 border-collapse block md:table">
      <thead class="block md:table-header-group">
        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th class="bg-[#F8FAFE] p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Name
          </th>
          <th class="bg-[#F8FAFE] p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Date Created
          </th>
          <th class="bg-[#F8FAFE] p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Email
          </th>
          <th class="bg-[#F8FAFE] p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Document
          </th>
          <th class="bg-[#F8FAFE] p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="block md:table-row-group">
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Name</span>
            sree
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Date</span>
            21-03-2024
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            sree@gmail.com
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            Document 1
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <button class="bg-[#565f77] hover:bg-blue-700 text-white font-bold py-1 mr-2 px-2   rounded">
              Update
            </button>
            <button class="bg-[#9aabd5] hover:bg-red-700 text-white font-bold py-1 px-2  rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Name</span>
            Sree
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Date</span>
            31-04-2024
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            sree@gmail.com
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            Document 2
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <button class="bg-[#565f77] hover:bg-blue-700 text-white font-bold py-1 mr-2 px-2   rounded">
              Update
            </button>
            <button class="bg-[#9aabd5] hover:bg-red-700 text-white font-bold py-1 px-2  rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableData;
