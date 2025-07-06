import Layout from '../../dashboard/Layout';
import {Link} from 'react-router-dom'


import request from '../../assets/dashboard/request.svg';
import presentation from '../../assets/dashboard/Presentation.svg';

const test = () => {
  const projectCards = [
    {
      title: 'Titan',
      date: 'Since 2 Mar 24',
      progress: 40,
      color: 'bg-cyan-400',
      logo: '/path/to/titan-logo.png',
    },
    {
      title: 'Tree Builder Group',
      date: 'Since 16 Jun 24',
      progress: 40,
      color: 'bg-lime-400',
      logo: '/path/to/tree-logo.png',
    },
    {
      title: 'Noblestones',
      date: 'Since 13 Jan 25',
      progress: 40,
      color: 'bg-slate-400',
      logo: '/path/to/noblestones-logo.png',
    },
  ];

  const requests = [1, 2, 3, 4]; // Dummy repeat for layout

  return (
    <Layout>
    <div className="p-6 ">
      {/* Overview Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img src={presentation} alt="" /> Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectCards.map((project, i) => (
           <Link key={i} to={`projects/${encodeURIComponent(project.title)}`}>
            <div  className="bg-white p-4 rounded-xl shadow-md">
              <div className="text-sm text-gray-500">{project.date}</div>
              <div className="flex items-center gap-2 mb-2">
                <img src={project.logo} alt={project.title} className="w-5 h-5" />
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
                <div
                  className={`h-2 rounded-full ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center mb-4">
                {/* Replace with actual avatars */}
                <img src="/avatars/user1.png" className="w-6 h-6 rounded-full" />
                <img src="/avatars/user2.png" className="w-6 h-6 rounded-full -ml-2" />
                <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full">4 online</span>
              </div>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>🛡️ Cyber Security</span>
                  <span>73% Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-xs pl-5">
                  <span>Security Service</span>
                  <span>40%</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>📈 Performance Marketing</span>
                  <span>52% Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-xs pl-5">
                  <span>SEM</span>
                  <span>80%</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>🎨 Branding</span>
                  <span>84% Completed</span>
                </div>
                <div className="flex justify-between text-gray-500 text-xs pl-5">
                  <span>Content Writing</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
           </Link>
          ))}
        </div>
      </div>

      {/* Requests Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img src={request} alt="" />
             Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {requests.map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="/path/to/exhibetter-logo.png" className="w-6 h-6" />
                  <h3 className="font-semibold text-md">Exhibetter</h3>
                </div>
                <p className="text-sm text-gray-500 mb-3">Service Requested</p>
                <ul className="space-y-1 text-sm text-gray-800">
                  <li>🧩 Custom Application</li>
                  <li>🛒 E Commerce Service</li>
                  <li>💡 Digital Experience</li>
                </ul>
              </div>
              <button className="mt-4 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800">
                Accept Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default test;
