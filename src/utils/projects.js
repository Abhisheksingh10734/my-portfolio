import taskflow from "../assets/taskflow.png";
import tbl from "../assets/tbl.png";
import killswitch from "../assets/killswitch.png";

export const projects = [
  {
    type: '// Featured Project',
    name: 'TaskFlow — Task Manager App',
    desc: 'A full-stack task management app with JWT authentication and complete CRUD operations. Users can create tasks, set priority levels, search through their tasks, and mark them as completed — all wrapped in a clean, responsive UI.',
    techs: ['React', 'Node.js', 'Express', 'PostgresSQL', 'JWT', 'Tailwind'],
    image: taskflow,
    demo: 'https://taskflow-tbl.vercel.app',
    github: 'https://github.com/Abhisheksingh10734/task-manager.git',
  },
  {
    type: '// Featured Project',
    name: 'Kill Switch — Protect Your Legacy',
    desc: 'Kill Switch is a full-stack digital legacy platform built with React, Express, and PostgreSQL. It lets users securely store critical documents and automatically delivers them to designated nominees if the user becomes unreachable — ensuring loved ones always have access to what they need, when they need it most.',
    techs: ['React', 'Tailwind', 'Express', 'PostgresSQL', 'Node.js', 'Supabase', 'JWT', 'Node-Cron'],
    image: killswitch,
    demo: 'https://kill-switch-legacy.vercel.app/',
    github: 'https://github.com/Abhisheksingh10734/',
  },
  {
    type: '// Featured Project',
    name: 'The Bachelor\'s Life — Blog App',
    desc: 'A blog platform with admin-only authentication, allowing the admin to create, edit, and delete posts. Visitors can read blogs and subscribe to stay updated on the latest content. Built with Firebase for the backend and EmailJS for subscription notifications.',
    techs: ['HTML', 'Firebase', 'EmailJS', 'CSS', 'Javascript'],
    image: tbl,
    demo: 'https://thebachelorslife.netlify.app',
    github: 'https://github.com/Abhisheksingh10734/TBL--The-Bachelor-s-Life-.git',
  },
];