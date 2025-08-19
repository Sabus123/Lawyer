// import React from 'react';
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

// const Favorites = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Favorites Analytics</h2>
//       <div style={{ width: '100%', height: 300 }}>
//         <ResponsiveContainer>
//           <AreaChart
//             data={data}
//             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="uv" stroke="#34d399" fill="#6ee7b7" />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Favorites;

import React from 'react';
import { Link } from 'react-router';

const Favorites = () => {
  return (
    <div className="card  card-xl shadow-sm mt-10">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <h1 className='font-bold'>কোন তথ্য জমা হয়নি। দয়া করে আপনার পছন্দের উকিলের সাথে কথা বলে, আপনার সমস্যা জানান |</h1>

    <div className="justify-end card-actions">
      <Link to='/'>
           <button className="btn btn-outline btn-secondary">Go to Homepage</button>
           </Link>
      
    </div>
  </div>
</div>
  );
};

export default Favorites;